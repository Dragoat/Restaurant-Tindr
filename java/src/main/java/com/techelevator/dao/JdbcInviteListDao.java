package com.techelevator.dao;

import com.techelevator.model.Invite;
import com.techelevator.model.InviteList;
import com.techelevator.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcInviteListDao implements InviteListDao{

    private JdbcTemplate jdbcTemplate;

    public JdbcInviteListDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    public void createInviteList(int invite_id, int recipient_id){
            String sql = "INSERT INTO invite_list (invite_id,recipient_id)  VALUES (?,?)";
            jdbcTemplate.update(sql, invite_id,recipient_id);
        }

    @Override
    public void deleteInviteListByInviteId(int invite_id) {
        String sql = "DELETE FROM invite_list WHERE invite_id = ?";
        jdbcTemplate.update(sql, invite_id);
        System.out.println("Invite Deleted");
    }

    @Override
    public List<InviteList> getInviteListByRecipeintId(int recipient_id) {
        return null;
    }

    @Override
    public List<InviteList> getAllRecipientsByInviteId(int invite_id) {
        return null;
    }

}
