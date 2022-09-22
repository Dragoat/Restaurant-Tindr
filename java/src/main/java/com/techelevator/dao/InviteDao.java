package com.techelevator.dao;

import com.techelevator.model.Invite;

import java.util.List;

public interface InviteDao {

    int createInvite(Invite invite);

    void updateInvite(Invite invite);

    void deleteInvite(int inviteId);

    Invite getInviteByInviteId(int inviteId) throws Exception;

    List<Invite> findAllSentInvitesByUserId(int senderId) throws Exception;

    List<Invite> findAllSentInvitesByUserIdLimitedByDate(int senderId, String appointment);

}
