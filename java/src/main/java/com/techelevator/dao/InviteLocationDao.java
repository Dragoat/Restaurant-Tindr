package com.techelevator.dao;

import com.techelevator.model.InviteLocation;

import java.util.List;

public interface InviteLocationDao {

    boolean createInviteLocation(InviteLocation inviteLocation);

    void updateInviteLocation(InviteLocation inviteLocation);

    void deleteInviteLocation(int placeId,int inviteId);

    InviteLocation getOneLocationAssociatedWithInviteId(int placeId,int inviteId) throws Exception;

    List<InviteLocation> findLocationsAssociatedWithInviteId(int inviteId) throws Exception;
}
