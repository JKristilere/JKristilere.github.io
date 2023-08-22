import pandas as pd
import nltk
import re
nltk.download()
import matplotlib.pyplot as plt


df = pd.read_csv("C:\\Users\\Jedidiah Kristilere\\Documents\\Datasets For Projects\\Instagram Play Store Reviews\\instagram.csv")


df = df.drop('review_date', axis=1)

# convert all the strings to lower characters and removing all special characters
df['review_description'] = df['review_description'].str.lower()
df['review_description'].replace('\W', ' ', regex=True, inplace=True)
# # Removing non-english words
# def remove_non_english(text):
#     english_words = set(nltk.corpus.words.words())
#     text = " ".join(w for w in nltk.wordpunct_tokenize(text)
#                     if w.lower() in english_words or not w.isalpha())
#     text = re.sub('\s+', ' ', text).strip()
#     return text
#
# df['review_description'] = df['review_description'].apply(remove_non_english)

# Removing numbers
def cleaning_numbers(data):
    return re.sub('[0-9]+', '', data)
df['review_description'] = df['review_description'].apply(lambda x: cleaning_numbers(x))


# SENTIMENT ANALYSIS
# Using the Nltk package to remove stop words, lemmatization, and tokenize
# Tokenization
from nltk.tokenize import RegexpTokenizer
regexp = RegexpTokenizer('\w+')
df['review_tokenized'] = df['review_description'].apply(regexp.tokenize)

# Removing Stop words
from  nltk.corpus import stopwords
stopwords = nltk.corpus.stopwords.words("english")
df['review_tokenized'] = df['review_tokenized'].apply(lambda x: [item for item in x if item not in stopwords])

#Removing infrequent words
df['review_strings'] = df['review_tokenized'].apply(lambda x: ' '.join([item for item in x if len(item) > 2]))

#Applying Lemmatization
from nltk.stem import WordNetLemmatizer
# nltk.download('wordnet')
wnl = WordNetLemmatizer()
def lemmatize_text(text):
    return ' '.join([wnl.lemmatize(word) for word in text.split()])

df['review_lemm'] = df['review_strings'].apply(lambda x: lemmatize_text(x))

# Sentiment Analysis using VADER lexicon
from nltk.sentiment import SentimentIntensityAnalyzer
# nltk.download('vader_lexicon')
analyzer = SentimentIntensityAnalyzer()
def analyze_sentiment(review):
    sentiment_score = analyzer.polarity_scores(review)
    return sentiment_score

df['sentiment_scores'] = df['review_lemm'].apply(analyze_sentiment)


# #Create a new column with Sentiment "neutral", "positive", "negative"
def get_sentiment_label(sentiment_scores):
    compound_score = sentiment_scores['compound']
    if compound_score >= 0.05:
        return 'Positive'
    elif compound_score <= -0.05:
        return 'Negative'
    else:
        return 'Neutral'

df['sentiment_label'] = df['sentiment_scores'].apply(get_sentiment_label)
print(df['sentiment_label'].value_counts())


# CREATING THE PIE CHART AND BAR CHART
# Calculate the Count for the Various Sentiment
Sentiment_counts = df['sentiment_label'].value_counts()
labels = Sentiment_counts.index
sizes = Sentiment_counts.values

# Creating the PIE CHART
plt.figure(figsize=(8, 6))
plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=140, colors= ['blue', 'red', 'orange'])
plt.title('Sentiment Analysis: Pie Chart')
plt.show()

# 2 BAR CHART
plt.figure(figsize=(10, 6))
bars = plt.bar(labels, sizes,  width=0.4)
plt.title('Sentiment Analysis: Bar Graph')
plt.xlabel('Sentiment Labels')
plt.ylabel('Number of Reviews')
plt.xticks(rotation=0)
plt.show()





df.to_csv("C:\\Users\\Jedidiah Kristilere\\Documents\\Datasets For Projects\\Instagram Play Store Reviews\\instagram2.csv", index= False)
