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
        String sql = "INSERT INTO invite (sender_id, appointment, place_ids)  VALUES (?,?,?) RETURNING invite_id;";
        int newInviteId;
        newInviteId = jdbcTemplate.queryForObject(sql, Integer.class,invite.getSenderId(),invite.getDate(),invite.getPlaceIds());
        invite.setInviteId(newInviteId);
        //these are where we will need to look into the auto generated serialized id #s
    }

    @Override
    public void updateInvite(Invite invite){
        String sql = "update invite set date = ? where invite_id = ?";
        jdbcTemplate.update(sql, invite.getDate(),invite.getDate());

    }

    @Override
    public void deleteInvite(int inviteId) {
        String sql = "DELETE FROM invite WHERE invite_id = ?";
        jdbcTemplate.update(sql, inviteId);
        System.out.println("Invite Deleted");
    }

    @Override
    public Invite getInviteByInviteId(int inviteId) throws Exception {
        String sql = "SELECT * FROM invite WHERE invite_id = ?;";
        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, inviteId);
        if (rowSet.next()){
            return mapRowToInvite(rowSet);
        }
        throw new Exception ("Invite " + inviteId + " was not found.");
    }

    @Override
    public List<Invite> findAllSentInvitesByUserId(int userId) throws Exception {
        List<Invite> invites = new ArrayList<>();
        String sql = "SELECT transfer_id, transfer_type_id, transfer_status_id, account_from, account_to, amount FROM transfer Join account on transfer.account_from = account.account_id WHERE account_from = (select account.account_id from account where account.user_id = ? ) or account_to = (select account.account_id from account where account.user_id = ? );";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId,userId);
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
        invite.setDate(rs.getString("time"));
        invite.setPlaceIds(rs.getString("place_ids"));
        return invite;
    }


}
