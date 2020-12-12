import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import ProgressBar from '../ProgressBar/ProgressBar';
import {Octokit} from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    fetchFailure: false,
    failure: '',
    user: 'DmBorozdin',
    userName:'',
    userAvatarUrl: '',
    userBio:'',
    userUrl:''
  }

  componentDidMount() {
    octokit.repos.listForUser ({
      username: this.state.user
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
      username: this.state.user
    }).then (({data}) => {
      this.setState({
        userName: data.name,
        userAvatarUrl: data.avatar_url,
        userBio: data.bio,
        userUrl: data.html_url
      })
      console.log(data);
    }).catch((err) => {console.log(err)});
  }

  render() {
    const { isLoading, repoList, fetchFailure, failure, userName, userAvatarUrl, userBio,  userUrl} = this.state;

    return (
      <div>
        { isLoading ? <Card><ProgressBar /></Card> : fetchFailure ?  <Card><Typography variant="h5" component="h2">{failure}</Typography></Card> :
          <div>
            <Card className={styles.userCard}>
              <CardHeader
                avatar = {
                  <Avatar alt="Аватарка" src={userAvatarUrl}/>
                }
                title = {
                  <Link href={userUrl} color="inherit">
                    {userName}
                  </Link>
                }
                subheader={userBio}
              />
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
