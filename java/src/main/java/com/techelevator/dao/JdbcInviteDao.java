package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Service
public class JdbcInviteDao implements InviteDao{

    private JdbcTemplate jdbcTemplate;


    public JdbcInviteDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }



    @Override
    public void createInvite(Invite invite) {
        String sql = "INSERT INTO invite (sender_id, appointment, place_ids)  VALUES (?,?,?) RETURNING invite_id;";
        int newInviteId;
        newInviteId = jdbcTemplate.queryForObject(sql, Integer.class,invite.getSenderId(),invite.getDate(),invite.getPlaceIds());
        invite.setInviteId(newInviteId);
        //the database auto increments the inviteId and the sql syntax does create a new invite when posted in pgAdmin
        // but im still trying to figure out why it doesnt work here  somthing about the request is wrong.
        // last night it seemed like the jason wasnt passing in but not sure
    }

    @Override
    public void updateInvite(Invite invite){
        String sql = "Set (sender_id, appointment, place_ids)  VALUES (?,?,?) WHERE invite_id = ?";
        jdbcTemplate.update(sql,invite.getSenderId(),invite.getDate(),invite.getPlaceIds(), invite.getInviteId());
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
    public List<Invite> findAllSentInvitesByUserId(int userId) throws Exception {
        List<Invite> invites = new ArrayList<>();
        String sql = "SELECT invite_id, sender_id, appointment, place_ids FROM invite WHERE sender_id = ? ;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
        while(results.next()) {
            Invite invite = mapRowToInvite(results);
            invites.add(invite);
        }
        if (invites.size()==0){
            throw new Exception("Invalid user id : "+ userId);
        }
        return invites;
    }

    @Override
    public List<Invite> findAllSentInvitesByUserIdLimitedByDate(int userId, String date) {
        return null;
    }

    private Invite mapRowToInvite(SqlRowSet rs) {
        Invite invite = new Invite();
        invite.setInviteId(rs.getInt("invite_id"));
        invite.setSenderId(rs.getInt("sender_id"));
        invite.setDate(rs.getString("appointment"));
        invite.setPlaceIds(rs.getString("place_ids"));
        return invite;
    }


}
