package com.techelevator.dao;

import com.techelevator.model.Invite;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

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
    public boolean createInvite(@RequestBody Invite invite) {
        boolean inviteCreated = false;
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        String id_column = "invite_id";

        String createNewInvite = "INSERT INTO invites (sender_id, appointment, location_search, food_search)  VALUES (?,?,?,?) RETURNING invite_id;";

        inviteCreated = jdbcTemplate.update(con -> {
            PreparedStatement statement = con.prepareStatement(createNewInvite, new String[] { id_column });
            statement.setInt(1, invite.getSenderId());
            statement.setString(2, invite.getAppointment());
            statement.setString(3, invite.getLocationSearch());
            statement.setString(4, invite.getFoodSearch());
            return statement;
        }, keyHolder) == 1;

        int newInviteId = (int) keyHolder.getKeys().get(id_column);

        System.out.println(inviteCreated);
        return inviteCreated;
    }

    @Override
    public void updateInvite(@RequestBody Invite invite) {
        String sql = "update invites Set (sender_id, appointment, location_search, food_search)  VALUES (?,?,?,?) WHERE invite_id = ?";
        jdbcTemplate.update(sql, invite.getSenderId(), invite.getAppointment(), invite.getInviteId());
    }

    @Override
    public void deleteInvite( @PathVariable int inviteId) {
        String sql = "DELETE FROM invites WHERE invite_id = ?";
        jdbcTemplate.update(sql, inviteId);
        System.out.println("Invite Deleted");
    }

    @Override
    public Invite getInviteByInviteId(@PathVariable int inviteId) throws Exception {
        String sql = "SELECT * FROM invites WHERE invite_id = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, inviteId);
        if (results.next()) {
            return mapRowToInvite(results);
        } else {
            throw new Exception("inviteId " + inviteId + " was not found.");
        }
    }

    @Override
    public List<Invite> findAllSentInvitesByUserId(@PathVariable int senderId) throws Exception {
        List<Invite> invites = new ArrayList<>();
        String sql = "SELECT * FROM invites WHERE sender_id = ? ;";
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
    public List<Invite> findAllSentInvitesByUserIdLimitedByDate(@PathVariable int userId, @PathVariable String appointment) {
        return null;
    }

    private Invite mapRowToInvite(SqlRowSet rs) {
        Invite invite = new Invite();
        invite.setInviteId(rs.getInt("invite_id"));
        invite.setSenderId(rs.getInt("sender_id"));
        invite.setAppointment(rs.getString("appointment"));
        invite.setLocationSearch(rs.getString("location_search"));
        invite.setFoodSearch(rs.getString("food_search"));
        return invite;
    }

}
