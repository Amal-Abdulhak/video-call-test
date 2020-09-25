import React, { Component } from 'react';
import { Button, Dimensions, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '46932514';
    this.sessionId = '2_MX40NjkzMjUxNH5-MTYwMTA0NTY5MjcxOH5YdFEzb0xlOEVhbk1pQkdhSFNmOW93Mk5-fg';
    this.token = 'T1==cGFydG5lcl9pZD00NjkzMjUxNCZzaWc9N2JjYWYxY2E3YjE4YzlkMzgwYzVjMzdmNWVlZmYxMGMxNWVjZmE4YzpzZXNzaW9uX2lkPTJfTVg0ME5qa3pNalV4Tkg1LU1UWXdNVEEwTlRZNU1qY3hPSDVZZEZFemIweGxPRVZoYmsxcFFrZGhTRk5tT1c5M01rNS1mZyZjcmVhdGVfdGltZT0xNjAxMDQ1NjkzJm5vbmNlPTAuNjAzNTkzNDE0NDE1MzIwMSZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNjAxMDQ3NDkzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
    this.state = {
      toggleStatus: true
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
        {
          this.state.toggleStatus == true ? <Text style={styles.heading}>Publisher Screen</Text> : <Text style={styles.heading}>Viewer Screen</Text>
        }
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          {
            this.state.toggleStatus == true ?
              <View>
                <OTPublisher style={{ width: deviceWidth, height: deviceHeight - 100 }} />
                <Button style={{ position: "absolute", bottom: 0 }}
                  onPress={() => { this.setState({ toggleStatus: !this.state.toggleStatus }) }}
                  title={"Switch to Viewer"}>
                </Button>
              </View>
              :
              <View>
                <OTSubscriber style={{ width: deviceWidth, height: deviceHeight - 100 }} />
                <Button style={{ position: "absolute", bottom: 0 }}
                  onPress={() => { this.setState({ toggleStatus: !this.state.toggleStatus }) }}
                  title={"Switch to Publisher"}>
                </Button>
              </View>
          }

        </OTSession>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    position: "absolute",
    top: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
});