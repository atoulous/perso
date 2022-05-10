import React, { useState } from 'react';
import cc from 'classnames';

import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  useMediaQuery, ListItemIcon,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { MoreHoriz, Close, Launch } from '@material-ui/icons';

import styles from './Refs.scss';

const logoMRT = 'https://d2ypeajg1katov.cloudfront.net/images/mrtlogowhite.png';
const kaptenlogo = 'https://d2ypeajg1katov.cloudfront.net/images/kaptenlogo.svg';
const mpslogo = 'https://d2ypeajg1katov.cloudfront.net/images/mpslogowhite.png';
const logoCS = 'https://d2ypeajg1katov.cloudfront.net/images/CSlogo.svg';

const Refs = () => {
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
    othersList: [
      'C',
      'bash',
    ],
  };

  const matchWidth = useMediaQuery('(min-width:650px)');

  return (
    <Box color={'text.primary'} className={cc(styles.refs, !matchWidth && styles.refsMobile)} id={'refs'}>
      <h2 className={styles.subTitle}>Refs</h2>

      <Dialog
        open={dialogOpen}
        onEscapeKeyDown={handleToggleDialog}
        onClose={handleToggleDialog}
      >
        <DialogTitle id="form-dialog-title">About this job</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <h4>stack used list:</h4>
          <List className={styles.subSkills}>
            {
              lists[dialogContent] && lists[dialogContent].map((item, key) => (
                <ListItem key={item} button className={styles.listItem}>
                  <Checkbox
                    edge="start"
                    checked
                  />
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

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <a href={'https://caresimple.com'} target={'_blank'} rel="noreferrer" className={styles.link}>
            <img src={logoCS} className={matchWidth ? styles.logo : styles.logoMini} alt="logoCS" />
          </a>
        </div>

        <div className={styles.containContainer}>
          <h4>Frontend Developer Javascript - Software Engineer</h4>
          <p>
            May 2021 - May 2022 | 1 year | Montréal
            <br />
            <hr />
            The Remote Patient Monitoring Company Making Virtual Health Simple
            <br />
            Migration old AngularJS to new ReactJS portal used by clinician
            <br />
            Assist team lead with clean code and best practices
            <br />
            Scrum team
            <br />
            <ListItem
              button
              className={styles.listItem}
              component="a"
              target={'_blank'}
              href={'https://caresimple.com'}
            >
              <ListItemIcon><Launch /></ListItemIcon>
              <ListItemText primary={'www.caresimple.com'} />
            </ListItem>
          </p>

          <Button
            startIcon={<MoreHoriz />}
            onClick={() => handleToggleDialog('careSimpleList')}
            color={'secondary'}
            variant="contained"
          >
            More about job
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <a href={'https://monsieurtshirt.com'} target={'_blank'} rel="noreferrer" className={styles.link}>
            <img src={logoMRT} className={matchWidth ? styles.logoMrt : styles.logoMrtMini} alt="logoMRT" />
          </a>
        </div>

        <div className={styles.containContainer}>
          <h4>Lead Developer</h4>
          <p>
            January 2020 - August 2020 | 8 months | Bordeaux
            <br />
            <hr />
            Management and recruitment
          </p>
          <h4>FullStack Developer Javascript - Software Engineer</h4>
          <p>
            Mars 2018 - January 2020 | 1,6 years | Paris - Bordeaux
            <br />
            <hr />
            Refonte de tout le SI/ERP pour du custom:
            <br />
            3 sites PWA en ReactJs pour les clients
            <br />
            Automatisation de l'atelier de production de 300m² à Bordeaux:
            <br />
            - pour les metiers: 1 backoffice ReactJs
            <br />
            - pour les opérateurs: app hybride mobile React-Native sur 6 devices, 1 app desktop Electron sur 15 Mac,
            1 app Electron sur 60 Raspberry Pi
            <br />
            Servi par 2 apis NodeJs/GraphQl, 1 database PostgreSQL et des serveurs en local pour des besoins
            spécifiques type imprimante, pick2light, ligne d'expédition
            <br />
            Orchestré et scalé en cloud sur AWS
            <br />
            <br />

            <ListItem
              button
              className={styles.listItem}
              component="a"
              target={'_blank'}
              href={'https://monsieurtshirt.com'}
            >
              <ListItemIcon><Launch /></ListItemIcon>
              <ListItemText primary={'le front: monsieurtshirt.com'} />
            </ListItem>
            <ListItem
              button
              className={styles.listItem}
              component="a"
              target={'_blank'}
              href={'https://youtu.be/4I5w0CrtnyE'}
            >
              <ListItemIcon><Launch /></ListItemIcon>
              <ListItemText primary={'visite de l\'atelier à Bordeaux'} />
            </ListItem>
          </p>

          <Button
            startIcon={<MoreHoriz />}
            onClick={() => handleToggleDialog('mrtList')}
            color={'secondary'}
            variant="contained"
          >
            More about job
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <a href={'https://kapten.com'} target={'_blank'} rel="noreferrer" className={styles.link}>
            <img src={kaptenlogo} className={matchWidth ? styles.logo : styles.logoMini} alt="kaptenlogo" />
          </a>
        </div>

        <div className={styles.containContainer}>
          <h4>Full Stack Developer Internship</h4>
          <p>
            April 2017 - sept 2017 | 6 months | Paris
            <br />
            <hr />

            Team Tech Acquisition
            <br />
            Handle new features and migrations from legacy api to new microservices architecture
          </p>

          <Button
            startIcon={<MoreHoriz />}
            onClick={() => handleToggleDialog('kaptenList')}
            color={'secondary'}
            variant="contained"
          >
            More about job
          </Button>
        </div>
      </Card>

      <Card className={styles.card}>
        <div className={styles.logoContainer}>
          <a href={'http://marineplaisanceservice.com'} target={'_blank'} rel="noreferrer" className={styles.link}>
            <img src={mpslogo} className={matchWidth ? styles.logoMps : styles.logoMpsMini} alt="mpslogo" />
          </a>
        </div>

        <div className={styles.containContainer}>
          <h4>Mécanicien bateaux</h4>
          <p>
            2013 - 2015 | 2 ans | Lège Cap-Ferret
            <hr />
            Mécanique - Eléctricité - Stratification - Plomberie - Dépannage - Navigation - Manutention...
            <br />
            {`Cette expérience très riche m'a permis d'apprendre a travailler avec mes mains, et à acquérir de la
            débrouillardise qui m'aide au quotidien et dans mon job de développeur.`}
            <br />
            Il y a beaucoup de similitudes entre un débogage informatique et une recherche de panne moteur !
          </p>
        </div>
      </Card>
    </Box>
  );
};

export default Refs;
