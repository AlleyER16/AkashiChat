const Home = () => {
    return (
        <div className="container">
            <div className="main text-center">
                <h1>Akashi Chat Room</h1>
                <p>
                    Welcome to Akashi Chat Room. <br/>
                    Create a profile to chat. 
                    <br/>Please note that your data would be 
                    cleared after 30 minutes inactivity
                </p>
                <div>
                    <button className="btn btn-primary">
                        Create Profile
                    </button>
                </div>
                <div className="my-card">
                    <div className="my-card-header text-center">
                        Create New Profile
                    </div>
                    <div className="my-card-body">
                        <form>
                            <div>
                                <label>Select Avatar</label>
                                <div>

                                </div>
                            </div>
                            <div className="mt-3">
                                <label>Display Name</label>
                                <input 
                                    type="text" 
                                    className="r-form" 
                                    placeholder="Enter your display name"
                                    />
                            </div>
                            <div className="mt-3 text-end">
                                <button className="btn btn-primary">Create Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;