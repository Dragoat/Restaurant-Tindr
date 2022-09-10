package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.InviteList;
import com.techelevator.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcInviteListDao implements InviteListDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcInviteListDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public void createInviteList(InviteList inviteList){
            String sql = "INSERT INTO invite_list (invite_id, invitee_id, place_replies)  VALUES (?,?,?);";
       jdbcTemplate.update(con -> {
            PreparedStatement statement = con.prepareStatement(sql, new int[]{});
           statement.setInt(1, inviteList.getInviteId());
           statement.setInt(2, inviteList.getRecipientId());
           statement.setObject(3, inviteList.getPlaceReplies());

           return statement;
       });
            jdbcTemplate.update(sql, inviteList.getInviteId(),inviteList.getRecipientId(),inviteList.getPlaceReplies());
        }

    @Override
    public void deleteInviteListByInviteId(int invite_id) {
        String sql = "DELETE FROM invite_list WHERE invite_id = ?";
        jdbcTemplate.update(sql, invite_id);
        System.out.println("Invite Deleted");
    }

    @Override
    public List<InviteList> getInviteListByRecipientId(int recipient_id) throws Exception {

        List<InviteList> invites = new ArrayList<>();
        String sql = "SELECT invite_id, invitee_id, place_replies  FROM invite_list WHERE invitee_id = ? ;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, recipient_id);
        while (results.next()) {
            InviteList inviteList = mapRowToInviteList(results);
            invites.add(inviteList);
        }
        if (invites.size() == 0) {
            throw new Exception("Invalid user id : " + recipient_id);
        }
        return invites;
    }


    @Override
    public List<InviteList> getAllRecipientsByInviteId(int invite_id) throws Exception {
        List<InviteList> invites = new ArrayList<>();
        String sql = "SELECT invite_id, invitee_id, place_replies FROM invite_list WHERE invite_id = ? ;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, invite_id);
        while (results.next()) {
            InviteList inviteList = mapRowToInviteList(results);
            invites.add(inviteList);
        }
        if (invites.size() == 0) {
            throw new Exception("Invalid user id : " + invite_id);
        }
        return invites;
    }

    private InviteList mapRowToInviteList(SqlRowSet rs) {
        InviteList invitelist = new InviteList();
        invitelist.setInviteId(rs.getInt("invite_id"));
        invitelist.setRecipientId(rs.getInt("invitee_id"));
        invitelist.setPlaceReplies(rs.getString("place_replies"));
        return invitelist;
    }

}
