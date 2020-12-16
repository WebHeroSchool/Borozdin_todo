import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ProgressBar from '../ProgressBar/ProgressBar';
import {Octokit} from '@octokit/rest';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from './About.module.css';

import errorImg from '../../img/error.svg';

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
    const { isLoading, repoList, fetchFailure, User, firstRepo, lastRepo} = this.state;

    return (
      <div>
        { isLoading ? <Card><ProgressBar /></Card> : fetchFailure ?
          <Card className={styles.repoCard + ' ' + styles.errorCard}>
            <div className={styles.errorWrap}>
              <img src={errorImg} alt='Ошибка загрузки' className={styles.errorImg}></img>
              <h2 className={styles.errorTitle}>Что-то пошло не так...</h2>
              <p className={styles.errorText}>Попробуйте <a href='.' className={styles.errorRefresh}>загрузить</a> ещё раз</p>
            </div>
          </Card> :

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
                {repoList.length>0 && <ul className={styles.repoList}>
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
                </ul>}
                {repoList.length===0 && <div className={styles.repoNone}>
                  <img src={errorImg} alt='Нет репозиториев' className={styles.repoNoneImg}></img>
                  <h2 className={styles.repoNoneTitle}>Репозитории отсутствуют</h2>
                  <p className={styles.repoNoneText}>Добавьте как минимум один репозиторий на <a href='https://github.com' className={styles.repoNoneLink}>github.com</a></p>
                </div>
                }
              </CardContent>

              { repoList.length>5 && <CardActions className={styles.buttonWrap}>
                  <Button className={styles.button} variant="outlined" color="primary" disabled={firstRepo ===0} onClick={() => this.onClickBack()}>Назад</Button>
                  <Button className={styles.button} variant="outlined" color="primary" disabled={repoList.length - lastRepo <= 0} onClick={() => this.onClickNext()}>Далее</Button>
                </CardActions>
              }
            </Card>
          </div>
        }
      </div>
    )
  }
}

export default About;
