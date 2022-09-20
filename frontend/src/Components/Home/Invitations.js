import React from "react";

<<<<<<< HEAD
function Invitations() {
    const [invitationList, setInvitationList] = React.useState([]);

    const userId = useSelector((state) => state.user.id);
    const token = useSelector((state) => state.token.token);

    useEffect(() => {
        axios.get('http://localhost:8081/invite_list/invitee/' + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            setInvitationList(response.data)
        })
    }, [])

    return ( 
        <div>
            <h1>Invitations</h1>
            
              {invitationList.map((invite) => {
                    return (
                    <div id={invite.userId} key={invite.inviteId}>
                        <Link  to={{
                            pathname: '/invitations/' + invite.inviteId,
                            state: {
                                inviteId: invite.inviteId,
                                token: token
                            },
                        }}>
                        <p>{invite.inviteId} link to invitation data</p>
                        </Link>
                    </div>
                    )
            })} 

        </div>
     );
}

export default Invitations;

   
=======
class Invitations extends React.Component {
 constructor(props) {
		super(props);
		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
	componentDidMount() {
		fetch(
"http://localhost:8081/invite_list/invitee/ 124")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					invite: json,
					DataisLoaded: true
				});
			})
	}
	async componentDidMount() {
    const response = await fetch("http://localhost:8081/invite_list/invitee/124");
    const json = await response.json();
    this.setState({
        invite: json,
        DataisLoaded: true
    });
    console.log(json);
      }
	render() {
		const { DataisLoaded, invite } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Test.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Test.... </h1> {
				invite.map((invite) => (
				<ol key = { invite.id } >
					name: { invite.username },
					User_Email: { invite.email }
					</ol>
				))
			}
		</div>
	);
}
}

export default Invitations;
>>>>>>> a20fe5285f1fe9c1aba72f15a68d658024a115c3
