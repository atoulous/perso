import React, { useState } from 'react';
import cc from 'classnames';

import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItemIcon,
  useMediaQuery,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MoreHoriz, Close, Launch } from '@material-ui/icons';
import styles from './Works.scss';

const careSimpleImg = 'https://d2ypeajg1katov.cloudfront.net/images/careSimpleImg.png';
const sitepersoImg = 'https://d2ypeajg1katov.cloudfront.net/images/siteperso.png';
const homemrt = 'https://d2ypeajg1katov.cloudfront.net/images/homemrt.png';
const hypertube = 'https://d2ypeajg1katov.cloudfront.net/images/hypertube.png';
const kapten = 'https://d2ypeajg1katov.cloudfront.net/images/kapten.png';
const matcha = 'https://d2ypeajg1katov.cloudfront.net/images/matcha.png';
const redtetris = 'https://d2ypeajg1katov.cloudfront.net/images/redtetris.png';
const rt1 = 'https://d2ypeajg1katov.cloudfront.net/images/rt1.png';
const rt2 = 'https://d2ypeajg1katov.cloudfront.net/images/rt2.png';
const wolf3d = 'https://d2ypeajg1katov.cloudfront.net/images/wolf3d.png';
const raycasting = 'https://d2ypeajg1katov.cloudfront.net/images/raycasting.gif';
const raytracing = 'https://d2ypeajg1katov.cloudfront.net/images/raytracing.png';

const Works = () => {
  const [dialogSettings, setDialogSettings] = useState({ dialogOpen: false, dialogContent: null });
  const { dialogOpen, dialogContent } = dialogSettings;

  const handleToggleDialog = (value = null) => {
    setDialogSettings({ dialogOpen: !dialogOpen, dialogContent: value });
  };

  const lists = {
    careSimpleList: [
      'TypeScript',
      'ReactJS',
      'Redux',
      'Hooks',
      'Bootstrap',
    ],
    persoList: [
      'ReactJS',
      'Heroku',
      'AWS',
    ],
    mrtList: [
      'ReactJS',
      'NodeJS',
      'GraphQL',
      'Apollo',
      'PostgreSQL',
      'Docker',
      'AWS',
      'React Native',
      'Electron',
      'Elasticsearch',
      'ELK',
      'Redis',
      'Nginx',
      'GA',
      'SEO perf',
      'BitBucket',
      'Asana',
      'Agile/Scrum',
    ],
    kaptenList: [
      'NodeJS',
      'AngularJS',
      'Python',
      'MongoDB',
      'Docker',
      'Git',
      'shell',
      'unit testing',
      'QA tools',
      'Code review',
      'Agile/Scrum',
      'Jira',
      'Confluence',
      'Slack',
    ],
    hypertubeList: [
      'NodeJS',
      'ReactJS',
      'ffmpeg',
      'MongoDB',
    ],
    matchaList: [
      'NodeJS',
      'ReactJS',
      'MongoDB',
    ],
    redtetrisList: [
      'ReactJS',
      'NodeJS',
      'WebSocket',
    ],
    rtList: [
      'C',
      'Ray-Tracing',
    ],
    wolfList: [
      'C',
      'Ray-Casting',
    ],
  };

  const content = {
    careSimpleList:
  <div>
    <p>The Remote Patient Monitoring Company Making Virtual Health Simple</p>
    <p>1 year job: Frontend migration from old angular to new react portal</p>
    <List className={styles.contentModalList}>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://www.caresimple.com'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'www.caresimple.com'} />
      </ListItem>
    </List>
  </div>,
    persoList:
  <div>
    <p>Presentation site in ReactJS started with create-react-app</p>
    <p>Material-Ui default dark theme</p>
    <p>Catalina backgrounds from current hour, logic made with the Context API</p>
    <ListItem
      button
      className={styles.listItem}
      component="a"
      target={'_blank'}
      href={'https://github.com/atoulous/perso'}
    >
      <ListItemIcon><Launch /></ListItemIcon>
      <ListItemText primary={'see code on github'} />
    </ListItem>
    <br />
    <span>I used deps like:</span>
    <List className={styles.contentModalList}>
      <ListItem button className={styles.listItem}><ListItemText primary={'create-react-app ejected'} /></ListItem>
      <ListItem button className={styles.listItem}><ListItemText primary={'material-ui'} /></ListItem>
      <ListItem button className={styles.listItem}><ListItemText primary={'eslint'} /></ListItem>
      <ListItem button className={styles.listItem}><ListItemText primary={'sass'} /></ListItem>
    </List>
    <span>Currently hosted on Heroku, please apologize HTTP/2 no support</span>
  </div>,
    mrtList:
  <div className={styles.contentModal}>
    <span>3 reactjs public web apps:</span>
    <List className={styles.contentModalList}>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://www.monsieurtshirt.com'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'monsieurtshirt.com'} />
      </ListItem>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://www.madametshirt.com'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'madametshirt.com'} />
      </ListItem>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://www.monsieurtshirtkids.com'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'monsieurtshirtkids.com'} />
      </ListItem>
    </List>
    <span>1 ReactJS private backoffice to rule them all ! (custom CMS like)</span>
    <span>1 React-Native mobile app for factory operators</span>
    <span>1 ReactJS/NodeJS electron desktop app for factory operators</span>
    <span>2 NodeJS/GraphQL apis to deserve private and public stuffs</span>
    <span>1 PostgreSQL database</span>
    <span>All handle in cloud with AWS</span>
    <span>Monitored with ELK and AWS</span>
    <p>DM for more</p>
  </div>,
    kaptenList:
  <div>
    <p>I worked on few part of site, backoffice, and apis</p>
    <List className={styles.contentModalList}>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://kapten.com'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'kapten.com'} />
      </ListItem>
    </List>
  </div>,
    hypertubeList:
  <div>
    <p>Hypertupe 42 project</p>
    <p>Streaming platform</p>
    <List className={styles.contentModalList}>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://github.com/atoulous/hypertube'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'github.com/atoulous/hypertube'} />
      </ListItem>
    </List>
  </div>,
    matchaList:
  <div>
    <p>Matcha 42 project</p>
    <p>Match dating app (tinder like) made with React and Express</p>
    <List className={styles.contentModalList}>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://github.com/atoulous/maaatchhasss'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'github.com/atoulous/maaatchhasss'} />
      </ListItem>
    </List>
  </div>,
    redtetrisList:
  <div>
    <p>Red Tetris 42 project</p>
    <p>Multiplayer Networking tetris made with React/Redux and Express</p>
    <List className={styles.contentModalList}>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://github.com/atoulous/green-tetris'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'github.com/atoulous/green-tetris'} />
      </ListItem>
    </List>
  </div>,
    rtList:
  <div>
    <p>Ray Tracing 42 project</p>
    <p>computer graphics rendering technique for generating an image</p>
    <p>software conception in C</p>
    <img src={rt2} alt="rt2" className={styles.img} />
    <img src={raytracing} alt="raytracing" className={styles.img} />
    <List className={styles.contentModalList}>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://github.com/atoulous/raytraceuse'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'github.com/atoulous/raytraceuse'} />
      </ListItem>
    </List>
  </div>,
    wolfList:
  <div>
    <p>Wolf3d 42 project - RayCasting</p>
    <p>recall counter-strike 1.6 in C with ray casting math method</p>
    <img src={raycasting} alt="raycasting" className={styles.img} />
    <List className={styles.contentModalList}>
      <ListItem
        button
        className={styles.listItem}
        component="a"
        target={'_blank'}
        href={'https://github.com/atoulous/Wooolllfff3d'}
      >
        <ListItemIcon><Launch /></ListItemIcon>
        <ListItemText primary={'github.com/atoulous/Wooolllfff3d'} />
      </ListItem>
    </List>
  </div>,
  };

  const matchWidth = useMediaQuery('(min-width:650px)');

  return (
    <Box color={'text.primary'} className={cc(styles.works, !matchWidth && styles.worksMobile)} id={'works'}>
      <h2 className={styles.subTitle}>Works</h2>

      <Dialog
        open={dialogOpen}
        onEscapeKeyDown={handleToggleDialog}
        onClose={handleToggleDialog}
      >
        <DialogTitle id="form-dialog-title">About this project</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          {
            dialogContent && content[dialogContent]
          }
          <h4>stack:</h4>
          <List className={styles.subSkills}>
            {
              lists[dialogContent] && lists[dialogContent].map((item, key) => (
                <ListItem key={item} button className={styles.listItem}>
                  <ListItemText id={key} primary={item} />
                </ListItem>
              ))
            }
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleToggleDialog}
            startIcon={<Close />}
            color={'secondary'}
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <div className={styles.worksCard} id={'works'}>

        <Card className={styles.card}>
          <img src={careSimpleImg} alt="careSimpleImg" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>CareSimple</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('careSimpleList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>

        <Card className={styles.card}>
          <img src={sitepersoImg} alt="sitepersoImg" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>Portfolio example</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('persoList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>

        <Card className={styles.card}>
          <img src={homemrt} alt="homemrt" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>Monsieur TSHIRT SI</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('mrtList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>

        <Card className={styles.card}>
          <img src={kapten} alt="kapten" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>Kapten (Chauffeur Privé)</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('kaptenList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>

        <Card className={styles.card}>
          <img src={redtetris} alt="redtetris" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>Red Tetris - web</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('redtetrisList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>

        <Card className={styles.card}>
          <img src={hypertube} alt="hypertube" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>Hypertube - web</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('hypertubeList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>

        <Card className={styles.card}>
          <img src={matcha} alt="matcha" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>Matcha - web</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('matchaList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>

        <Card className={styles.card}>
          <img src={rt1} alt="rt1" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>Ray Traceur - infography</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('rtList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>

        <Card className={styles.card}>
          <img src={wolf3d} alt="wolf3d" className={styles.img} />
          <div className={styles.containContainer}>
            <h4>wolf3d - infography</h4>
            <Button
              startIcon={<MoreHoriz />}
              onClick={() => handleToggleDialog('wolfList')}
              color={'secondary'}
              variant="contained"
            >
              About
            </Button>
          </div>
        </Card>
      </div>
    </Box>
  );
};

export default Works;
