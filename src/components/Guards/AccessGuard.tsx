/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { playSelector, loadingSelector, answerListSelector } from 'store';
import LoadingBar from '../LoadingBar';

interface IProps {
  children: React.FC;
}

const AccessGuard = (props: IProps) => {
  const { children } = props;
  const navigate = useNavigate();
  const loading = useSelector(loadingSelector);
  const play = useSelector(playSelector);
  const answers = useSelector(answerListSelector);

  useEffect(() => {
    if (play === false && answers === null) navigate('/');
  }, []);

  if (loading) return <LoadingBar />;

  return <>{children}</>;
};

export default AccessGuard;
