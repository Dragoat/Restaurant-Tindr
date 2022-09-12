package com.techelevator.dao;

import com.techelevator.model.InviteLocation;

import java.util.List;

public interface InviteLocationDao {

    boolean createInviteLocation(InviteLocation inviteLocation);

    void updateInviteLocation(InviteLocation inviteLocation);

    void deleteInviteLocation(String placeId,int inviteId);

    InviteLocation getOneLocationAssociatedWithInviteId(String placeId,int inviteId) throws Exception;

    List<InviteLocation> findLocationsAssociatedWithInviteId(int inviteId) throws Exception;
}
