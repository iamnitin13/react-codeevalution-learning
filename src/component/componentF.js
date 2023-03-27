import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";
import { UserConsumer } from "../context/userContext";

function ComponentF() {
  //   const userName = useContext(UserContext);
  //   const channelName = useContext(ChannelContext);

  return (
    <div>
      {/* <UserContext.Consumer>
        {(value) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    Compoent F userName {value}; channel name {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer> */}

      <UserConsumer>
        {(value) => <div>Compoent F userName {value}</div>}
      </UserConsumer>
    </div>
    // <div>
    //   Component F UserName: {userName} and ChannelName: {channelName}
    // </div>
  );
}

export default ComponentF;
