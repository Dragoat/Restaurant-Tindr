package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.User;

import java.util.List;

public interface InviteListDao {

    List<Invite> findAllReceivedInvitesByUserId(int userId);
    List<Invite> findAllReceivedInvitesByUserIdLimitedByDate(int userId, String date);

    List<User> findAllRecipientsByInviteId(int inviteId);
}
