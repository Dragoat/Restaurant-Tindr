package com.techelevator.dao;

import com.techelevator.model.Invite;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

public class JdbcInviteDao implements InviteDao{
    @Override
    public void create(Invite invite) {

    }

    @Override
    public void update(Invite Invite) {

    }

    @Override
    public void delete(int inviteId) {

    }

    @Override
    public Invite getInviteById(int inviteId) {
        return null;
    }

    @Override
    public List<Invite> findAllSentInvitesByUserId(int userId) {
        return null;
    }

    @Override
    public List<Invite> findAllSentInvitesByUserIdLimitedByDate(int userId, String date) {
        return null;
    }
}
