
import React, {useState} from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import career from '../../../../assets/styles/scss/sections/index/career.module.scss';
import qna from '../../../../src/content/index/qna.json';

interface QnAItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

const QnA: React.FC = () => {
    const [qnas, setQnas] = useState<QnAItem[]>(qna);

    const toggleAnswer = (index: number) => {
        setQnas((prevState) => {
            const updatedQnas = [...prevState];
            updatedQnas[index].isOpen = !updatedQnas[index].isOpen;
            return updatedQnas;
        });
    };

    return (
        <></>
    );
};

export default QnA;
