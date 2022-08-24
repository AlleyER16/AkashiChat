const Room = () => {
    return (
        <div className="container1">
            <div className="main1 room">
                <div className="row w-100 m-0 h-100">
                    <div className="col-lg-3 sidebar">
                        <div className="sidebar_top">
                            <div className="user_block">
                                Rehoboth Micah-Daniels
                            </div>
                            <div className="search_block">
                                <input 
                                    type="search" 
                                    className="r-form" 
                                    placeholder="Search"
                                    />
                            </div>
                        </div>
                        <div className="sidebar_bottom">
                            <div className="chat_block row m-0 w-100">
                                <div className="col-lg-2">
                                    <img src="http://localhost:5000/dc/avatars/5.png" alt="" className="chat_img rounded-circle"/>
                                </div>
                                <div className="col-lg-10 pt-2">
                                    <div className="row m-0 w-100">
                                        <div className="col-lg-9">
                                            Seun Amole
                                        </div>
                                        <div className="col-lg-3">
                                            7:09am
                                        </div>
                                    </div>
                                    <div className="row m-0 w-100">
                                        <div className="col-lg-9">
                                            You: No Conversation Yet
                                        </div>
                                        <div className="col-lg-2 text-end">
                                            <span className="unread">2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat_block row m-0 w-100">
                                <div className="col-lg-2">
                                    <img src="http://localhost:5000/dc/avatars/5.png" alt="" className="chat_img rounded-circle"/>
                                </div>
                                <div className="col-lg-10 pt-2">
                                    <div className="row m-0 w-100">
                                        <div className="col-lg-9">
                                            Seun Amole
                                        </div>
                                        <div className="col-lg-3">
                                            7:09am
                                        </div>
                                    </div>
                                    <div className="row m-0 w-100">
                                        <div className="col-lg-9">
                                            You: No Conversation Yet
                                        </div>
                                        <div className="col-lg-2 text-end">
                                            <span className="unread">2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Room;