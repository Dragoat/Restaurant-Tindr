package com.techelevator.dao;

import com.techelevator.model.Invite;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcInviteDao implements InviteDao{

    private JdbcTemplate jdbcTemplate;


    public JdbcInviteDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }



    @Override
    public void createInvite(Invite invite) {
        String sql = "INSERT INTO invite (sender_id, date, place_ids) VALUES (?, ?, ?, ?) RETURNING invite_id;";
        int newInviteId;
        newInviteId = jdbcTemplate.queryForObject(sql, Integer.class,invite.getInviteId(),invite.getSenderId(),invite.getDate(),invite.getPlaceIds());
        invite.setInviteId(newInviteId);
        //these are where we will need to look into the auto generated serialized id #s
    }

    @Override
    public void updateInvite(Invite invite){

    }

    @Override
    public void deleteInvite(int inviteId) {

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

    private Invite mapRowToInvite(SqlRowSet rs) {
        Invite invite = new Invite();
        invite.setInviteId(rs.getInt("invite_id"));
        invite.setSenderId(rs.getInt("sender_id"));
        invite.setDate(rs.getString("time"));
        invite.setDate(rs.getString("place_ids"));
        return invite;
    }


}
