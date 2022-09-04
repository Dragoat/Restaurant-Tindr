package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcInviteListDao implements InviteListDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcInviteListDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

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
