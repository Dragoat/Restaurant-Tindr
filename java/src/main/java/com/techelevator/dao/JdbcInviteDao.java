package com.techelevator.dao;

import com.techelevator.model.Invite;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcInviteDao implements InviteDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcInviteDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public boolean createInvite(Invite invite) {
        boolean inviteCreated = false;
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        String id_column = "invite_id";

        String createNewInvite = "INSERT INTO invite (sender_id, appointment, place_ids)  VALUES (?,?,?) RETURNING invite_id;";

        inviteCreated = jdbcTemplate.update(con -> {
            PreparedStatement statement = con.prepareStatement(createNewInvite, new String[] { id_column });
            statement.setInt(1, invite.getSenderId());
            statement.setString(2, invite.getAppointment());
            return statement;
        }, keyHolder) == 1;

        int newInviteId = (int) keyHolder.getKeys().get(id_column);

        System.out.println(inviteCreated);
        return inviteCreated;
    }

    @Override
    public void updateInvite(Invite invite) {
        String sql = "Set (sender_id, appointment, place_ids)  VALUES (?,?,?) WHERE invite_id = ?";
        jdbcTemplate.update(sql, invite.getSenderId(), invite.getAppointment(), invite.getInviteId());
    }

    @Override
    public void deleteInvite(int inviteId) {
        String sql = "DELETE FROM invite WHERE invite_id = ?";
        jdbcTemplate.update(sql, inviteId);
        System.out.println("Invite Deleted");
    }

    @Override
    public Invite getInviteByInviteId(int inviteId) throws Exception {
        String sql = "SELECT * FROM invite WHERE invite_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, inviteId);
        if (results.next()) {
            return mapRowToInvite(results);
        } else {
            throw new Exception("inviteId " + inviteId + " was not found.");
        }
    }

    @Override
    public List<Invite> findAllSentInvitesByUserId(int senderId) throws Exception {
        List<Invite> invites = new ArrayList<>();
        String sql = "SELECT invite_id, sender_id, appointment, place_ids FROM invite WHERE sender_id = ? ;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, senderId);
        while (results.next()) {
            Invite invite = mapRowToInvite(results);
            invites.add(invite);
        }
        if (invites.size() == 0) {
            throw new Exception("Invalid user id : " + senderId);
        }
        return invites;
    }

    @Override
    public List<Invite> findAllSentInvitesByUserIdLimitedByDate(int userId, String appointment) {
        return null;
    }

    private Invite mapRowToInvite(SqlRowSet rs) {
        Invite invite = new Invite();
        invite.setInviteId(rs.getInt("invite_id"));
        invite.setSenderId(rs.getInt("sender_id"));
        invite.setAppointment(rs.getString("appointment"));
        return invite;
    }

}
