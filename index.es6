import React from 'react';
import ReactStyleGuide from 'react-styleguide';
import Gobbet from '@economist/component-gobbet';
import Icon from '@economist/component-icon';
import ImageCaption from '@economist/component-imagecaption';
import Pager from '@economist/component-pager';
import ShareBar from '@economist/component-sharebar';
const customSharebarFlip = {
  useSvg: true,
  fxDirection: 'flip-to-top',
  fxType: 'cube',
  layout: 'horizontal',
  background: '#333333',
  fxDefaultStateBackground: '#999999',
};

const customSharebar = {
  useSvg: true,
  layout: 'horizontal',
  icon: {
    color: '#FFFFFF',
  },
  icons: [
    {
      href: 'http://www.facebook.com/sharer/sharer.php?u=http://www.google.com',
      title: 'Share on Facebook',
      className: 'fb',
      icon: 'facebook',
      s: {
        events: 'event76',
      },
    },
    {
      href: 'https://twitter.com/intent/tweet?url=http://www.ubmedia.com',
      title: 'Share on Twitter',
      className: 'twitter',
      icon: 'twitter',
      s: {
        events: 'event31',
      },
    },
  ],
};


export default class StyleGuide extends React.Component {

  render() {
    return (
      <ReactStyleGuide>
        <div 
          title="Gobbet" 
          description="Here is a description describing a simple Blockquote component and how to use it." 
        >
          <Gobbet title="Default Gobbet" showShareBar={true} sharebar={customSharebar}>
            <ImageCaption caption="This is a default Gobbet"
            src="http://worldif.economist.com/assets/434402ab5456@1x.jpg"
            srcset="http://worldif.economist.com//assets/434402ab5456@1x.jpg 1.0x,
            http://worldif.economist.com//assets/434402ab5456@1.3x.jpg 1.3x,
            http://worldif.economist.com//assets/434402ab5456@1.4x.jpg 1.4x,
            http://worldif.economist.com//assets/434402ab5456@1.6x.jpg 1.6x,
            http://worldif.economist.com//assets/434402ab5456@2x.jpg 2.0x,
            http://worldif.economist.com//assets/434402ab5456@2.6x.jpg 2.6x,
            http://worldif.economist.com//assets/434402ab5456@3.3x.jpg 3.3x"
             />
          </Gobbet>
        </div>
        <div 
          title="Image caption" 
          description="Here is a description describing a simple Blockquote component and how to use it." 
        >
          <ImageCaption caption="My caption" src="http://worldif.economist.com/assets/434402ab5456@1x.jpg"
            srcset="http://worldif.economist.com//assets/434402ab5456@1x.jpg 1.0x,
            http://worldif.economist.com//assets/434402ab5456@1.3x.jpg 1.3x,
            http://worldif.economist.com//assets/434402ab5456@1.4x.jpg 1.4x,
            http://worldif.economist.com//assets/434402ab5456@1.6x.jpg 1.6x,
            http://worldif.economist.com//assets/434402ab5456@2x.jpg 2.0x,
            http://worldif.economist.com//assets/434402ab5456@2.6x.jpg 2.6x,
            http://worldif.economist.com//assets/434402ab5456@3.3x.jpg 3.3x"
            alt="this is the image description" />
        </div>
        <div 
          title="Icon" 
          description="Here is a description describing a simple Blockquote component and how to use it." 
        >
          <Icon icon="facebook" />
          <Icon icon="twitter" />
          <Icon icon="googleplus" />
          <Icon icon="linkedin" />
          <Icon icon="whatsapp" />
          <Icon icon="mail" />
          <Icon icon="rss" />
          <Icon icon="down" />
          <Icon icon="up" />
          <Icon icon="right" />
          <Icon icon="left" />
          <Icon icon="close" />
          <Icon icon="worldif" />
          <Icon icon="home" />
          <Icon icon="hamburger" />
          <Icon icon="user" />
          <Icon icon="magnifier" />
          <Icon icon="share" />
          <Icon icon="economist-small"/>
          <Icon icon="economist"/>
          <h1>Overwrite</h1>
          <Icon className="rounded" icon="facebook" color="green" background="red" />
          <Icon className="rounded" icon="twitter" color="green" background="red" />
          <Icon className="rounded" icon="googleplus" color="green" background="red" />
          <Icon className="rounded" icon="linkedin" color="green" background="red" />
          <Icon className="rounded" icon="whatsapp" color="green" background="red" />
          <Icon className="rounded" icon="mail" color="green" background="red" />
          <Icon className="rounded" icon="rss" color="green" background="red" />
          <Icon className="rounded" icon="down" color="green" background="red" />
          <Icon className="rounded" icon="up" color="green" background="red" />
          <Icon className="rounded" icon="right" color="green" background="red" />
          <Icon className="rounded" icon="right" color="green" background="red" />
          <Icon className="rounded" icon="close" color="green" background="red" />
          <Icon className="rounded" icon="left" color="green" background="red" />
          <Icon className="rounded" icon="worldif" color="green" background="red" />
          <Icon className="rounded" icon="home" color="green" background="red" />
          <Icon className="rounded" icon="hamburger" color="green" background="red" />
          <Icon className="rounded" icon="user" color="green" background="red" />
          <Icon className="rounded" icon="magnifier" color="green" background="red" />
          <Icon className="rounded" icon="share" color="green" background="red" />
          <Icon className="rounded" icon="economist-small" background="white"/>
          <Icon icon="economist" size="200px" background="white"/>
        </div>
        <div 
          title="Pager" 
          description="Here is a description describing a simple Blockquote component and how to use it." 
        >
          <Pager />
        </div>
        <div 
          title="Sharebar" 
          description="Here is a description describing a simple Blockquote component and how to use it." 
        >
          <ShareBar layout="horizontal" />
        </div>
      </ReactStyleGuide>
    );
  }
}
