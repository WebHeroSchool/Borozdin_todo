import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import ProgressBar from '../ProgressBar/ProgressBar';
import {Octokit} from '@octokit/rest';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    fetchFailure: false,
    failure: '',
    userName: 'DmBorozdin',
    User: []
  }

  componentDidMount() {
    octokit.repos.listForUser ({
      username: this.state.userName
    }).then (({data}) => {
      this.setState({
        repoList: data,
        isLoading: false,
        fetchFailure: false
      });
      console.log(data);
    }).catch((err) => {
      this.setState({
        fetchFailure: true,
        isLoading: false,
        failure: 'Ошибка: ' + err.name +' ' + err.message
      });
      console.log(err)
    });

    octokit.users.getByUsername ({
      username: this.state.userName
    }).then (({data}) => {
      this.setState({
        User: data
      })
      console.log(data);
    }).catch((err) => {console.log(err)});
  }

  render() {
    const { isLoading, repoList, fetchFailure, failure, User} = this.state;

    return (
      <div>
        { isLoading ? <Card><ProgressBar /></Card> : fetchFailure ?  <Card><Typography variant="h5" component="h2">{failure}</Typography></Card> :
          <div className={styles.wrap}>
            <Card className={styles.userCard}>
              <CardMedia
                className={styles.userAvatar}
                image={User.avatar_url}
                title="User Avatar"
                alt="Аватарка"
              >
              </CardMedia>
              <CardContent className={styles.userInfo}>
                <Typography variant="h6" component="h2" className={styles.userInfoTitle}>
                  {User.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={styles.userBio}>
                  {User.bio}
                </Typography>
                <Link href="mailto: borozdin1@yandex.ru" color="textSecondary" className={styles.emailLink} underline="none">
                  <AlternateEmailIcon fontSize="small" className={styles.emailImage}/>
                  borozdin1@yandex.ru
                </Link>
                <Link href="tg://resolve?domain=DmBorozdin" color="textSecondary" className={styles.telegramlLink} underline="none">
                  <TelegramIcon fontSize="small" className={styles.telegramImage}/>
                  +7 923 228 77 91
                </Link>
              </CardContent>
            </Card>
            <Card className={styles.repoCard}>
              <CardContent>
                <Typography variant="h6" component="h2">
                  Мои репозитории:
                </Typography>
                <List component="nav" aria-label="repositories-list">
                  {repoList.map(repo => (
                    <Link href={repo.html_url} className={styles.link} color="inherit" key={repo.id}>
                      <ListItem button>
                        <ListItemText primary={repo.name} />
                      </ListItem>
                    </Link>))}
                </List>
              </CardContent>
            </Card>
          </div>
        }
      </div>
    )
  }
}

export default About;
