
import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import  Icon  from 'react-native-vector-icons/Ionicons';


const CONTENT = [
  {
    title: 'Terms and Conditions',
    content:
      'The following terms and conditions, together with any referenced documents (collectively, "Terms of Use") form a legal agreement between you and your employer, employees, agents, contractors and any other entity on whose behalf you accept these terms (collectively, “you” and “your”), and ServiceNow, Inc. (“ServiceNow,” “we,” “us” and “our”).',
  },
  {
    title: 'Privacy Policy',
    content:
      'A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users, what kind of personal data you collect and what you do with that data.',
  },
  {
    title: 'About Dyniz',
        content:
      'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
  },
];

const Separator = () => (
  <View style={styles.separator} />
);
export default class AboutUsScreen extends Component {
  state = {
  
    activeSections: [],
    
    collapsed: true,
    
    multipleSelect: false,
  };
 toggleExpanded = () => {
    //Toggling the state of single Collapsible
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    //setting up a active section state
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
          
      
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text>
      
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
                 
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
          
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={this.renderHeader}
            //Header Component(View) to render
            renderContent={this.renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={this.setSections}
            //setting the state of active sections
          />
         
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});