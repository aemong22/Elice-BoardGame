import numpy as np
import pandas as pd
import googletrans
from nltk.corpus import stopwords
import re
from nltk import word_tokenize, sent_tokenize
import nltk
from wordcloud import WordCloud
from collections import Counter
import json
from tqdm import tqdm

# from pypapago import Translator
# translator = Translator()
# nltk.download('punkt')
# nltk.download('stopwords')


def get_word_cloud(comments, id, index):
    arrs = []
    translator = googletrans.Translator()

    for i in tqdm(comments):
        try:
            # translated_word = translator.translate(
            #     i, source='en', target='ko', verbose=False)
            translator.raise_Exception = True
            translated_word = translator.translate(i, dest='ko')
        except Exception as err:
            print(f'error in {i}  :  {err}')
            continue
            # translator = googletrans.Translator()
            # translator.raise_Exception = True
            # translated_word = translator.translate(i, src='en',  dest='ko')

        arrs.append(translated_word.text)

    counts_word = Counter(arrs)
    tags = counts_word.most_common(len(set(comments)))

    wordcloud = WordCloud(
        width=1200,
        height=800,
        background_color='white',
        font_path='./NanumGothic.ttf'
    )

    wordclouds = wordcloud.generate_from_frequencies(dict(tags))
    wordclouds.to_file(
        f'./recentwordcloud/{index}_{id}.png')


def tokenize_text(text):
    stop = './stopWords.csv'

    df4 = pd.read_csv(stop)

    text = re.sub('[^a-zA-Z]', ' ', text)
    text = text.lower()
    result = []

    # 문장별로 분리
    sentences = sent_tokenize(text)
    stemmer = nltk.stem.SnowballStemmer('english')

    # 분리된 문장별 단어 토큰화
    stop_words = stopwords.words('english')
    stop_words.append('player')
    stop_words.append('game')
    stop_words.append('playing')
    stop_words.append('play')
    stop_words.append('players')
    stop_words.append('like')
    stop_words.append('make')
    stop_words.append('gloomhaven')
    stop_words.append('locat')
    stop_words.append('quot')
    stop_words.append('oppon')
    stop_words.append('pfister')
    stop_words.append('abl')
    stop_words.append('annihil')
    stop_words.append('toget')
    stop_words.append('readi')

    for i in df4.itertuples():
        stop_words.append(i[1])

    word_tokens = [word_tokenize(sentence) for sentence in sentences]
    for i in word_tokens:
        for j in i:
            if j not in stop_words:
                stemm = stemmer.stem(j)
                result.append(stemm)

    return result


if __name__ == '__main__':
    # translated_word = translator.translate(
    #     'project', source='en', target='ko', verbose=False)
    # print(translated_word.text)
    file = './datasetwithrecent.json'
    # todo: 다시 돌려보기 현재 구글 번역기 오류 남

    with open(file, 'r') as file:
        data = json.load(file)
        index = 0
        for item in data['data'][29:33]:
            # 121부터
            id = item['ID']
            index = item['index']
            description = item['description']
            name = item['Name']
            word_list = tokenize_text(description)
            print(f'#{index}--{id} ')
            try:
                get_word_cloud(word_list, id, index)
            except:
                print(f'error in {index}')
                continue

'''
76--37111
error in viper  :  timed out
error in card  :  timed out

88--144733 
error in end  :  Unexpected status code "429" from ('translate.google.com',)

199 error 

'''
