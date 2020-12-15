import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import ProgressBar from '../ProgressBar/ProgressBar';
import {Octokit} from '@octokit/rest';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    fetchFailure: false,
    failure: '',
    userName: 'DmBorozdin',
    User: [],
    firstRepo: 0,
    lastRepo: 5
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

  onClickNext = () => {
    this.setState({
      firstRepo: this.state.firstRepo + 4,
      lastRepo: this.state.lastRepo + 4
    })
  };

  onClickBack = () => {
    this.setState({
      firstRepo: this.state.firstRepo - 4,
      lastRepo: this.state.lastRepo - 4
    })
  };

  render() {
    const { isLoading, repoList, fetchFailure, failure, User, firstRepo, lastRepo} = this.state;

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
                <div className={styles.socialNetwork}>
                  <Link href={User.html_url} color="textSecondary" underline="none" className={styles.socialNetworkLink}>
                    <ion-icon name="logo-github" class={styles.socialNetworkLogo}></ion-icon>
                  </Link>
                  <Link href="https://vk.com/dimjake" color="textSecondary" underline="none" className={styles.socialNetworkLink}>
                    <ion-icon name='logo-vk' class={styles.socialNetworkLogo}></ion-icon>
                  </Link>
                  <Link href="https://www.instagram.com/dmitry.borozdin/" color="textSecondary" underline="none" className={styles.socialNetworkLink}>
                    <ion-icon name="logo-instagram" class={styles.socialNetworkLogo}></ion-icon>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className={styles.repoCard}>
              <CardContent className={styles.repositoriesWrap}>
                <Typography variant="h6" component="h2">
                  Репозитории на GitHub.com:
                </Typography>
                <ul className={styles.repoList}>
                  {repoList.slice(firstRepo,lastRepo).map(repo => (
                    <Link href={repo.html_url} className={styles.repolink} color="inherit" key={repo.id} underline="none">
                      <li className={styles.repository}>
                        <p className={styles.repoName}> {repo.name} </p>
                        <div className={styles.repoInfo}>
                          <div className={styles.repoLanguage}>
                            <div className={styles[`repoLanguage_${repo.language}`.toLowerCase()] + ' ' + styles.repoLanguageIcon}></div>
                            <p className={styles.repoText}>{repo.language}</p>
                          </div>
                          <div className={styles.repoStar}>
                            <ion-icon name="star" class={styles.repoStarIcon}></ion-icon>
                            <p className={styles.repoText}>{repo.stargazers_count}</p>
                          </div>
                          <div className={styles.repoForks}>
                            <ion-icon name="git-network-outline" class={styles.repoForksIcon}></ion-icon>
                            <p className={styles.repoText}>{repo.forks}</p>
                          </div>
                          <p className={styles.repoText}>Обновлен {new Date(repo.updated_at).toLocaleString('ru', { day:'numeric', month:'long', year:'numeric'})}</p>
                        </div>
                      </li>
                    </Link>))}
                </ul>
              </CardContent>
              <CardActions className={styles.buttonWrap}>
                <Button className={styles.button} variant="outlined" color="primary" disabled={firstRepo ===0} onClick={() => this.onClickBack()}>Назад</Button>
                <Button className={styles.button} variant="outlined" color="primary" disabled={repoList.length - lastRepo <= 0} onClick={() => this.onClickNext()}>Далее</Button>
              </CardActions>
            </Card>
          </div>
        }
      </div>
    )
  }
}

export default About;
