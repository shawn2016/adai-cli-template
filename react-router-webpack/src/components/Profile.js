import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Profile = () => {
  return (
    <Card>
      <Card.Content>
        <Image
          size="mini"
          floated="right"
          shape="circular"
          bordered
          src="https://avatars2.githubusercontent.com/u/13601019?s=460&v=4"
        />
        <Card.Header>shawn</Card.Header>
        <Card.Description>
        不放弃，你就可以做成你想做的事，成为你想成为的人。          
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="https://github.com/shawn2016" target="_blank">
          <Icon name="github" />
          GitHub
        </a>
      </Card.Content>
    </Card>
  );
};

export default Profile;
