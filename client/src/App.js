import React from 'react';
import './App.css';
import axios from 'axios';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apps: false,
            error: false,
            searchValue: ''
        }
    }

    componentDidMount() {
        const hrefSplit = window.location.href.split('?');
        if (hrefSplit.length === 2) {
            if (hrefSplit[1].startsWith('s=')) {
                const searchQuery = hrefSplit[1].replace('s=', '');
                this.setState({ searchValue: searchQuery });
            }
        }

        axios.get('/api/apps/').then(({ data }) => {
            if ('error' in data) {
                this.setState({error: data.error});
            } else {
                this.setState({apps: data});
            }
        });
    }

    searchApps = event => {
        this.setState({ searchValue: event.target.value });
    };

    render() {
        return (
            <div className="container mb-4 mt-4">
                { this.state.error ? (
                    <div className="alert alert-danger text-center mt-4">{ this.state.error }</div>
                ): this.state.apps ? (
                    <div>
                        <h3 className="text-center">SAMF AppStore</h3>
                        <div className="search row d-flex justify-content-center">
                            <input type="text" placeholder="App"
                                   onChange={this.searchApps} value={this.state.searchValue}/>
                        </div>
                        { this.state.apps.filter(app =>
                            (new RegExp(this.state.searchValue, 'ig')).test(app.name)
                        ).map(app => (
                            <div key={app.appId}>
                                <div className="row d-flex justify-content-center appShortInfosContainer">
                                    <div className="col-auto">
                                        <img className="iconImg"
                                             src={'https://ipa.samf.me/' + app.iconImg }
                                             alt={'icon for ' + app.name}/>
                                    </div>
                                    <div className="col appShortInfos">
                                        { app.name }<br/>
                                        { app.seller }
                                    </div>
                                    <div className="col-auto d-flex align-items-center">
                                        <div className="btn btn-sm btn-light dlButton">
                                            <a href={'itms-services://?action=download-manifest&url=https://appstore.samf.me/api/' + app.appId + '/manifest.plist'}>GET</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                ): null}
            </div>
        );
    }
}
