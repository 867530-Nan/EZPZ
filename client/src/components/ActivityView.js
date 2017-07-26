import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/activityview.css';

const ActivityView = ({ activity = {} }) => (
  <Container className="activityView">
    <div className="singleActivity">
      <img class="icon icons8-Family-Two-Women" width="48" height="48" src="data:image/png;base64,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" />
        <span className="activity-title">Activities on {activity.date}:</span>
      <span as="h3" textAlign="center" className="activity-view">{activity.name}</span>
      <img class="icon icons8-Family-Two-Men" width="48" height="48" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFiElEQVRoQ+1Ya0xbZRh+TlvKYFyKmFnDuBkHZnOTJcYER8Lp4g8XWNYfXuIlA8xcpjIH/puZGfwwGBMDyS6a+WNFl6BRsy5oUJPRdsOJt9BlcXJZxoYugzjWDjoope3new60tPS057SjYUTe5CSnX9/3+Z7nfd/vnO87HFa4cSucP1YFLHcFVyuwYirA83yRSqU6wBjjOY4rCyFe193dbYpXiGMfiqDGAYrjaSUu4PlRl3McivEUtdD27dtriXgrEdctJkrj1+hqovEzVqvVqUSI403UQoVW8o3AA8M1Gm9CCs7ktEEWT1YAZd5ImT8tR4xEOOkykAh7LF9HPYz0vywe+Tjhh4GqERMvpgAir6OsD0tlXorkvIjiaJVwNFDGvRiWzLy0aic0KI5ViZgCqHUaCFcodYStTQW2PaoWr/YLs7j6Lwv4NNOaEFoqwhxvoYH6XRIPGg20D+mRotfDPTQI38REEC/nKLVUFIspwGAwWCn7lYHYUNIVJSlBSJebofGLaVEEVcFmsVh4SQH1sNJ4EC+UdIr+4WAIm52Fq/dCQISNBEjiCQFyFWDRSC8mGCqCKiCJS/3PopFejBcqggRE5SkrYPfTKajZpo1WwbDx9p88+IzaKZaANRtKsKakVBGee3BAbKdVASu2AkNHNjKXthBlBRqx5AfbfkdLw5Nh5Q8ds494keG5jg37L0u2pvfTAsbS8qDJfVARnnf8FrjpG9C8PpLYGmAdJU3QlR5W1LABJ+dAM/fSoORjb6nxZJ9CggPrqqY3IfeEMhHsIrfj29B9UkTYUuPJbiVY185aYnFSmQDUcTs6TbF8lxpPVoDyKshnPyBMWRWU4SkTYDHq4PbSWzRaK7GLWKPhOYNZdvcoJmQJ8RQJCGbuVD5DZjGgzZ4b8twBJofBvfp3XDhLiRfXxOwT2gpIGLcvsY8DS4EnL+DjFh5+roZ4Gy3qEzoeV8MkWPEIDL69QuuYoWLteOMgtVp0qzB28mqoCI8ZW586qNv6wKUw577bm9H4awvhcWYf/O095p0x8aILaG3VIXVGeAcIW2rRMjHj+5z7Ur2Luyz+NrNN2M1e8E0iVR3Cog0zqc1obAxbD7zRovPj7mHa3Qbx0tVTvne3fKSuWNcrhp8fK0fLpXd8U770IB7tbttUWNtsNRsk15e0AIG8dsYSdlaNldZF/5XfGR04e/G7P9L83o2g87OXqXue8bRlJIpHjWvnkG6QEiEt4HiLiUootE3cVntzACcHbRFx531b8I2/EnZWEjemGMBgspmr6hYHRwo49mEZOH9fIrMUuScx/EtH1FAXS0PD7Nu4gvWJwINj2Go1V4WdkSMF3EP2Tf1W1IwNLpBLUQEFmeI1OTSLzH/G0OPfjEPevQkJoPXQfs5cXRsaLCXASu2zcOyLYypnjwkZnA/qwow54oXz74t5jOnuMaSN3ALvORIH6oIrPcNt505X8TICPpB81iuZkdlOALWbYrua/kxYgABsO10VlnSJCvyPBYw4O5C/tUCswImv+rH3+cci7sd+vokXLzUrKaikT1IrIMzoLOxFtsonObnLo0W16bWEySe9hYQJzOv+wq61tyVJ9lwrwqEfn72/BRRp3LDn2SOqIGR/z9fPYdSVdX8LENiVaV3oy/kBSNfPkZ0axZ6uelwZnzvM34slfQ1ASxnOzofD8Qp0/rnvm05VFh6f+B76/rvIGPfcC/8kPkZV9K00l/Y5OXTgIXt5ohPvO46K9+/p9uNUdrV4n2efQNFvd6Dx+BMSkrwKrC+nlslVRCr7hhtl5jFFvoudkiMgKx/QK/zyMs+o9Ow4tZQrbhHJERBH9gOME61CcgSUzPV3vFZ57Hq8IQoWcdyQyxsgf6hfXn6ys68KkE1Rkh3+A0Nqck/RgbuJAAAAAElFTkSuQmCC" />
    </div>
    <Table definition color="teal">
      <Table.Body>
        <Table.Row>
          <Table.Cell>Time</Table.Cell>
          <Table.Cell>{activity.time}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Date</Table.Cell>
          <Table.Cell>{activity.date}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Location</Table.Cell>
          <Table.Cell>{activity.location}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Is the Activity Indoors?</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{activity.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Webpage</Table.Cell>
          <Table.Cell><a href="{activity.url}">{activity.url}</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cost</Table.Cell>
          <Table.Cell>${activity.cost}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

export default connect()(ActivityView);
