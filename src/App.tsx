import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from './components/Card'
import { DECK, shuffleDeck } from './data/Deck'

export default function App(): React.ReactNode {
  const [cardsShowing, setCardsShowing] = useState<number[]>([])
  const [discardedCards, setDiscardedCards] = useState<number[]>([])
  const [doShuffleDeck, setDoShuffleDeck] = useState<boolean>(false)

  useEffect(() => {
    if (doShuffleDeck) {
      shuffleDeck(DECK)
      setDoShuffleDeck(false)
    }
  }, [doShuffleDeck])

  useEffect(() => {
    if (cardsShowing.length === 2) {
      const isMatch = DECK[cardsShowing[0]] === DECK[cardsShowing[1]]
      if (isMatch) {
        setDiscardedCards((prev) => [...prev, ...cardsShowing])
        setCardsShowing([])
      } else {
        setCardsShowing([])
      }
    }
  }, [cardsShowing, DECK])

  if (discardedCards.length === DECK.length) {
    return (
      <View style={styles.endGameContainer}>
        <StatusBar style="auto" />
        <Text style={styles.endGameText}>{'🎉 Congratulations!!\nWanna go again? 👀'}</Text>
        <Button
          title="Retry"
          onPress={() => {
            setDiscardedCards([])
            setDoShuffleDeck(true)
          }}
        />
      </View>
    )
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      {DECK.map((number, idx) => (
        <Card
          key={idx}
          id={idx}
          flippedCards={cardsShowing}
          showEmpty={discardedCards.includes(idx)}
          onCardFlip={() => {
            setCardsShowing((prev) => [...prev, idx])
          }}
          disabledFlip={cardsShowing.length > 1}>
          {/* <Image source={{ uri: `https://picsum.photos/seed/${number}/65` }} resizeMode="contain" /> */}
          <Text style={styles.cardText}>{number}</Text>
        </Card>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    marginTop: 50,
    backgroundColor: '#fffacd',
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endGameContainer: {
    flex: 1,
    backgroundColor: '#fffacd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endGameText: {
    padding: 10,
  },
  cardText: {
    textAlign: 'center',
  },
})
