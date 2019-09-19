import {
    Timeline,
    Content,
    ContentYear,
    ContentBody,
    Description
  } from 'vertical-timeline-component-react';
import React, { Component } from 'react';

class Work extends Component {
    render() {
        return(
            <div className="time-line">
            <Timeline>
                <div>
                <Content>
                    <ContentYear year="2020" />
                    <ContentBody title="LEAD TUTOR">
                        <Description text="UCSC" optional="SEPT 2019 - NOW"/>
                    </ContentBody>
                </Content>
                <Content>
                <ContentYear year="2019" />
                    <ContentBody title="PROD. MANAGER">
                        <Description text="CFSG" optional="APR 2018 - JUN 2019"/>
                    </ContentBody>
                </Content>
                <Content>
                <ContentYear year="2018" />
                    <ContentBody title="DEVELOPER">
                        <Description text="JOLOKIA" optional="FEB 2018 - FEB 2019"/>
                    </ContentBody>
                </Content>
                <Content>
                <ContentYear year="2018" />
                    <ContentBody title="UNDERGRAD">
                        <Description text="UCSC" optional="SEP 2016 - NOW"/>
                    </ContentBody>
                </Content>
                
                </div>
            </Timeline>
            </div>
        )
    }
}

export default Work;