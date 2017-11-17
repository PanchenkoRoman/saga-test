import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from '../App/reducer';
import { makeSelectData } from '../App/selectors';
import { getDataFormApi } from '../App/actions';
import messages from './messages';


const Block = styled.div`
    width: 50px;
    height: 50px;
    position: absolute
  `;

const Wrapper = styled.div`
    position: relative;
    margin-top: 50px;
  `;

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getDataFormApi();
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Wrapper>
          {
            (data !== undefined && Object.keys(data).length !== 0)
              ? data.items.map((item) => (
                <Block key={item.id} style={item} />
              ))
              : ''
          }
        </Wrapper>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

const withConnect = connect(mapStateToProps, { getDataFormApi });
const withReducer = injectReducer({ key: 'test', reducer });
const withSaga = injectSaga({ key: 'test', saga });

export default compose(withConnect, withReducer, withSaga)(HomePage);
