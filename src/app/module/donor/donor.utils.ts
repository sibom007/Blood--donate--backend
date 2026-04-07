export const handleAssignmentAccepted = async (
  tx: any,
  requestId: string,
  acceptedId: string,
) => {
  // 1. Cancel all other PENDING assignments for this request
  await tx.requestAssignment.updateMany({
    where: {
      requestId,
      id: { not: acceptedId },
      status: "PENDING",
    },
    data: { status: "CANCELLED" },
  });

  // 2. Update the Blood Request
  await tx.bloodRequest.update({
    where: { id: requestId },
    data: {
      status: "FULFILLED",
      forwardReason: null,
    },
  });

  // 3. Update Event Audit Log
  await tx.event.updateMany({
    where: { entityId: requestId, eventType: "REQUEST_CREATED" },
    data: {
      eventType: "REQUEST_CREATED",
      metadata: {
        matched: true,
        status: "DONOR_FOUND",
        completedAt: new Date(),
      },
    },
  });
};

export const handleAssignmentFailure = async (
  tx: any,
  requestId: string,
  failedId: string,
) => {
  // 1. Count how many people are still "PENDING" (excluding the one who just failed)
  const pendingCount = await tx.requestAssignment.count({
    where: {
      requestId,
      status: "PENDING",
      id: { not: failedId },
    },
  });

  const isLastDonor = pendingCount === 0;

  if (isLastDonor) {
    //  CASE: Everyone has failed. Move back to Admin.
    await tx.bloodRequest.update({
      where: { id: requestId },
      data: {
        status: "PENDING",
        forwardReason: "NO_RESPONSE", // Or "REJECTED"
      },
    });

    // Update the Event log so the User/Admin sees the failure
    await tx.event.updateMany({
      where: { entityId: requestId, eventType: "REQUEST_CREATED" },
      data: {
        eventType: "NO_DONOR_FOUND",
        metadata: {
          matched: false,
          reason: "ALL_ASSIGNMENTS_FAILED",
          updatedAt: new Date(),
        },
      },
    });
  } else {
    //  CASE: Others are still thinking. Just update the count.
    await tx.event.updateMany({
      where: { entityId: requestId, eventType: "REQUEST_CREATED" },
      data: {
        metadata: {
          matched: true,
          remainingPending: pendingCount,
          note: "Some donors failed; still waiting for others.",
        },
      },
    });
  }
};
