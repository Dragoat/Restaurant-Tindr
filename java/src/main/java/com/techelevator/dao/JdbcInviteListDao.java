package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.User;

import java.util.List;

public class JdbcInviteListDao implements InviteListDao{
    @Override
    public List<Invite> findAllReceivedInvitesByUserId(int userId) {
        return null;
    }

    @Override
    public List<Invite> findAllReceivedInvitesByUserIdLimitedByDate(int userId, String date) {
        return null;
    }

    @Override
    public List<User> findAllRecipientsByInviteId(int inviteId) {
        return null;
    }
}
