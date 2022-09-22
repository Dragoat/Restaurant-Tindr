package com.techelevator.dao;

import com.techelevator.model.InviteList;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcInviteListDao implements InviteListDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcInviteListDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public void createInviteList(@RequestBody InviteList inviteList){
            String sql = "INSERT INTO invite_list (invite_id, recipient_id)  VALUES (?,?);";
       jdbcTemplate.update(con -> {
            PreparedStatement statement = con.prepareStatement(sql, new int[]{});
           statement.setInt(1, inviteList.getInviteId());
           statement.setInt(2, inviteList.getRecipientId());
           return statement;
       });

        }

    @Override
    public void deleteInviteListByInviteId(@PathVariable int invite_id) {
        String sql = "DELETE FROM invite_list WHERE invite_id = ?";
        jdbcTemplate.update(sql, invite_id);
        System.out.println("Invite Deleted");
    }

    @Override
    public List<InviteList> getInviteListByRecipientId(@PathVariable int recipient_id) throws Exception {

        List<InviteList> invites = new ArrayList<>();
        String sql = "SELECT invite_id, recipient_id FROM invite_list WHERE recipient_id = ? ;";
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
    public List<InviteList> getAllRecipientsByInviteId(@PathVariable int invite_id) throws Exception {
        List<InviteList> invites = new ArrayList<>();
        String sql = "SELECT invite_id, recipient_id FROM invite_list WHERE invite_id = ? ;";
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
        invitelist.setRecipientId(rs.getInt("recipient_id"));
        return invitelist;
    }

    //select invites.invite_id, recipient_id, username, email, sender_id, appointment, place_id, no_vote, yes_vote from invite_list
    //left join users on invite_list.recipient_id = users.user_id
    //left join invites on invite_list.invite_id = invites.invite_id
    //left join invite_location on invites.invite_id = invite_location.invite_id

}
