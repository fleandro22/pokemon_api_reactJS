import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CardSkeleton = () => {
  return (
    <SkeletonTheme color="#36404e" highlightColor="#2E2E32">
    <div className="mainAppSkeleton">
      <div className="mainApp__item" aria-label="card" >
        <Skeleton height={120}/>
        <Skeleton height={120}/>
        <Skeleton height={120}/>
        <Skeleton height={120}/>
      </div>

      <div className="mainApp__item" aria-label="card" >
        <Skeleton height={120}/>
        <Skeleton height={120}/>
        <Skeleton height={120}/>
        <Skeleton height={120}/>
      </div>

      <div className="mainApp__item" aria-label="card" >
        <Skeleton height={120}/>
        <Skeleton height={120}/>
        <Skeleton height={120}/>
        <Skeleton height={120}/>
      </div>
     
    </div>      
    </SkeletonTheme>
  )
}

export default CardSkeleton
