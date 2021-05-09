import React, { PropsWithChildren, useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

interface CardProps {
  id: number
  showEmpty?: boolean
  flippedCards: number[]
  disabledFlip?: boolean
  onCardFlip(): void
}

function Card(props: PropsWithChildren<CardProps>): React.ReactElement | null {
  const { children, disabledFlip, id, flippedCards, onCardFlip, showEmpty } = props
  const [isFlipped, setFlipped] = useState<boolean>(false)

  useEffect(() => {
    // flip the card back after a bit to give the player enough time to see the content
    setTimeout(() => {
      if (flippedCards.includes(id) && !isFlipped) {
        setFlipped(true)
      } else if (!flippedCards.includes(id) && isFlipped) {
        setFlipped(false)
      }
    }, 350)
  }, [id, flippedCards, isFlipped])

  if (showEmpty) {
    return <View style={[styles.cardContainer, styles.emptyCard]} />
  }
  if (!isFlipped) {
    return (
      <TouchableOpacity
        style={[styles.cardContainer, styles.backSide]}
        disabled={disabledFlip}
        onPress={() => {
          setFlipped(true)
          onCardFlip()
        }}
      />
    )
  }
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      disabled={disabledFlip}
      onPress={() => setFlipped(false)}>
      {children}
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    width: 75,
    height: 75,
    padding: 20,
    margin: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  emptyCard: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  backSide: {
    backgroundColor: 'purple',
  },
})
