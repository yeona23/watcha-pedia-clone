import React from 'react';
import * as style from './ContentsInfoBox.style'
import InfoRightBox from './InfoRightBox';
import { useSelector } from 'react-redux';

const ContentsInfoBox = () => {
	const mockMovieData = useSelector(state => state.movie);
    const mockMovie1 = mockMovieData[0];

    return (
        <style.BgGray>
            <style.InfoBox>
                <style.InfoLeftBox>
                    <style.InfoImg src={`https://image.tmdb.org/t/p/original/${mockMovie1.poster_path}`} alt="" />
                    <style.GraphSection>
                        <style.GrayText margin='8px'>별점 그래프</style.GrayText>
                        <style.Average>평균 {mockMovie1.vote_average/2}
                            <style.GrayText as="span"> ({mockMovie1.vote_count}명)</style.GrayText>
                        </style.Average>
                        <p>그래프</p>
                    </style.GraphSection>
                </style.InfoLeftBox>
                <InfoRightBox />
            </style.InfoBox>
        </style.BgGray>
    );
};

export default ContentsInfoBox;