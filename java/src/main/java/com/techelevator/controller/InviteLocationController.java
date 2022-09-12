package com.techelevator.controller;

import com.techelevator.dao.InviteLocationDao;
import com.techelevator.model.InviteLocation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/invite_location")
@PreAuthorize("isAuthenticated()")
public class InviteLocationController {

    @Autowired
    private InviteLocationDao inviteLocationDao;

    @PostMapping(value = "")
    public void createInviteLocation(@RequestBody InviteLocation inviteLocation) {
        inviteLocationDao.createInviteLocation(inviteLocation);
    }

    //the database has a delete cascade set up on invite_id so that when an invite_id
    // gets deleted the all assocaited invite-location data also gets erased,but just in case this exists
    @DeleteMapping(value = "/{placeId}/{inviteId}")
    public void deleteInvite(@PathVariable String placeId, @PathVariable int inviteId) {
        inviteLocationDao.deleteInviteLocation(placeId,inviteId);
    }

    //also cant imagine why we would need this, but just in case
    @GetMapping(value = "/{placeId}/{inviteId}")
    public InviteLocation getOneLocationAssociatedWithInviteId(@PathVariable String placeId, @PathVariable int inviteId) throws Exception {
        return inviteLocationDao .getOneLocationAssociatedWithInviteId(placeId, inviteId);
    }

    @GetMapping(value = "/invite_id/{inviteId}")
    public List<InviteLocation> getInvitesByInviteId(@PathVariable int inviteId) throws Exception {
        List<InviteLocation> locations = null;
        locations = inviteLocationDao.findLocationsAssociatedWithInviteId(inviteId);
        return locations;
    }







}
