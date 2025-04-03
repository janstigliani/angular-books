import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookShelfingService {

  protected booksArray: Book[] = [
    {
      "id": 26184,
      "title": "Simple Sabotage Field Manual",
      "authors": [
        {
          "name": "United States. Office of Strategic Services",
        }
      ],
      "summaries": [
        "\"Simple Sabotage Field Manual\" by United States. Office of Strategic Services is a historical publication written during the early 1940s, amid World War II. This manual acts as a guide for ordinary civilians to conduct simple acts of sabotage against enemy operations without the need for specialized training or equipment. Its main topic revolves around promoting small, accessible forms of resistance that could collectively disrupt the enemy's war effort.  The manual outlines various strategies and techniques for citizens to engage in sabotage that could be executed discreetly and with minimal risk. It provides specific suggestions for targeting transportation, communication, and industrial facilities to create delays and inefficiencies in enemy operations. The manual emphasizes the power of many individuals acting independently to contribute to a larger campaign of disruption, encouraging simple acts such as misplacing tools, delaying communication, or damaging equipment with household items. Overall, the \"Simple Sabotage Field Manual\" serves as a unique historical artifact that illustrates grassroots resistance efforts and the belief in the collective power of ordinary people during wartime. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Sabotage"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg"
    },
    {
      "id": 84,
      "title": "Frankenstein; Or, The Modern Prometheus",
      "authors": [
        {
          "name": "Shelley, Mary Wollstonecraft",
          "birth_year": 1797,
          "death_year": 1851
        }
      ],
      "summaries": [
        "\"Frankenstein; Or, The Modern Prometheus\" by Mary Wollstonecraft Shelley is a novel written in the early 19th century. The story explores themes of ambition, the quest for knowledge, and the consequences of man's hubris through the experiences of Victor Frankenstein and the monstrous creation of his own making.   The opening of the book introduces Robert Walton, an ambitious explorer on a quest to discover new lands and knowledge in the icy regions of the Arctic. In his letters to his sister Margaret, he expresses both enthusiasm and the fear of isolation in his grand venture. As Walton's expedition progresses, he encounters a mysterious, emaciated stranger who has faced great suffering—furthering the intrigue of his narrative. This stranger ultimately reveals his tale of creation, loss, and the profound consequences of seeking knowledge that lies beyond human bounds. The narrative is set up in a manner that suggests a deep examination of the emotions and ethical dilemmas faced by those who dare to defy the natural order. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Frankenstein's monster (Fictitious character) -- Fiction",
        "Frankenstein, Victor (Fictitious character) -- Fiction",
        "Gothic fiction",
        "Horror tales",
        "Monsters -- Fiction",
        "Science fiction",
        "Scientists -- Fiction"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
      
    },
    {
      "id": 2701,
      "title": "Moby Dick; Or, The Whale",
      "authors": [
        {
          "name": "Melville, Herman",
          "birth_year": 1819,
          "death_year": 1891
        }
      ],
      "summaries": [
        "\"Moby Dick; Or, The Whale\" by Herman Melville is a novel written in the mid-19th century. The story follows Ishmael, a sailor on a whaling voyage, who seeks adventure and escape from his gloomy life on land. As he embarks on this journey, he becomes drawn into the complex world of whaling and is introduced to the ominous figure of Captain Ahab, whose obsession with a legendary white whale ultimately drives the narrative.  At the start of the novel, Ishmael introduces himself and shares his philosophy about the sea as a remedy for his melancholic disposition. He muses on the magnetic pull of the ocean, describing not only his own urge to set sail but also the collective longing of city dwellers for the water. Ishmael's journey takes him to New Bedford, where he experiences a series of humorous and strange encounters while seeking lodging before joining a whaling ship. As he navigates his way through the town, he is introduced to Queequeg, a tattooed harpooner with a mysterious past, setting the stage for a unique friendship that unfolds amidst the backdrop of whaling adventures. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Adventure stories",
        "Ahab, Captain (Fictitious character) -- Fiction",
        "Mentally ill -- Fiction",
        "Psychological fiction",
        "Sea stories",
        "Ship captains -- Fiction",
        "Whales -- Fiction",
        "Whaling -- Fiction",
        "Whaling ships -- Fiction"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg"
    },
    {
      "id": 26184,
      "title": "Simple Sabotage Field Manual",
      "authors": [
        {
          "name": "United States. Office of Strategic Services",
        }
      ],
      "summaries": [
        "\"Simple Sabotage Field Manual\" by United States. Office of Strategic Services is a historical publication written during the early 1940s, amid World War II. This manual acts as a guide for ordinary civilians to conduct simple acts of sabotage against enemy operations without the need for specialized training or equipment. Its main topic revolves around promoting small, accessible forms of resistance that could collectively disrupt the enemy's war effort.  The manual outlines various strategies and techniques for citizens to engage in sabotage that could be executed discreetly and with minimal risk. It provides specific suggestions for targeting transportation, communication, and industrial facilities to create delays and inefficiencies in enemy operations. The manual emphasizes the power of many individuals acting independently to contribute to a larger campaign of disruption, encouraging simple acts such as misplacing tools, delaying communication, or damaging equipment with household items. Overall, the \"Simple Sabotage Field Manual\" serves as a unique historical artifact that illustrates grassroots resistance efforts and the belief in the collective power of ordinary people during wartime. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Sabotage"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg"
    },
    {
      "id": 84,
      "title": "Frankenstein; Or, The Modern Prometheus",
      "authors": [
        {
          "name": "Shelley, Mary Wollstonecraft",
          "birth_year": 1797,
          "death_year": 1851
        }
      ],
      "summaries": [
        "\"Frankenstein; Or, The Modern Prometheus\" by Mary Wollstonecraft Shelley is a novel written in the early 19th century. The story explores themes of ambition, the quest for knowledge, and the consequences of man's hubris through the experiences of Victor Frankenstein and the monstrous creation of his own making.   The opening of the book introduces Robert Walton, an ambitious explorer on a quest to discover new lands and knowledge in the icy regions of the Arctic. In his letters to his sister Margaret, he expresses both enthusiasm and the fear of isolation in his grand venture. As Walton's expedition progresses, he encounters a mysterious, emaciated stranger who has faced great suffering—furthering the intrigue of his narrative. This stranger ultimately reveals his tale of creation, loss, and the profound consequences of seeking knowledge that lies beyond human bounds. The narrative is set up in a manner that suggests a deep examination of the emotions and ethical dilemmas faced by those who dare to defy the natural order. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Frankenstein's monster (Fictitious character) -- Fiction",
        "Frankenstein, Victor (Fictitious character) -- Fiction",
        "Gothic fiction",
        "Horror tales",
        "Monsters -- Fiction",
        "Science fiction",
        "Scientists -- Fiction"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
      
    },
    {
      "id": 2701,
      "title": "Moby Dick; Or, The Whale",
      "authors": [
        {
          "name": "Melville, Herman",
          "birth_year": 1819,
          "death_year": 1891
        }
      ],
      "summaries": [
        "\"Moby Dick; Or, The Whale\" by Herman Melville is a novel written in the mid-19th century. The story follows Ishmael, a sailor on a whaling voyage, who seeks adventure and escape from his gloomy life on land. As he embarks on this journey, he becomes drawn into the complex world of whaling and is introduced to the ominous figure of Captain Ahab, whose obsession with a legendary white whale ultimately drives the narrative.  At the start of the novel, Ishmael introduces himself and shares his philosophy about the sea as a remedy for his melancholic disposition. He muses on the magnetic pull of the ocean, describing not only his own urge to set sail but also the collective longing of city dwellers for the water. Ishmael's journey takes him to New Bedford, where he experiences a series of humorous and strange encounters while seeking lodging before joining a whaling ship. As he navigates his way through the town, he is introduced to Queequeg, a tattooed harpooner with a mysterious past, setting the stage for a unique friendship that unfolds amidst the backdrop of whaling adventures. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Adventure stories",
        "Ahab, Captain (Fictitious character) -- Fiction",
        "Mentally ill -- Fiction",
        "Psychological fiction",
        "Sea stories",
        "Ship captains -- Fiction",
        "Whales -- Fiction",
        "Whaling -- Fiction",
        "Whaling ships -- Fiction"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg"
    },
    {
      "id": 26184,
      "title": "Simple Sabotage Field Manual",
      "authors": [
        {
          "name": "United States. Office of Strategic Services",
        }
      ],
      "summaries": [
        "\"Simple Sabotage Field Manual\" by United States. Office of Strategic Services is a historical publication written during the early 1940s, amid World War II. This manual acts as a guide for ordinary civilians to conduct simple acts of sabotage against enemy operations without the need for specialized training or equipment. Its main topic revolves around promoting small, accessible forms of resistance that could collectively disrupt the enemy's war effort.  The manual outlines various strategies and techniques for citizens to engage in sabotage that could be executed discreetly and with minimal risk. It provides specific suggestions for targeting transportation, communication, and industrial facilities to create delays and inefficiencies in enemy operations. The manual emphasizes the power of many individuals acting independently to contribute to a larger campaign of disruption, encouraging simple acts such as misplacing tools, delaying communication, or damaging equipment with household items. Overall, the \"Simple Sabotage Field Manual\" serves as a unique historical artifact that illustrates grassroots resistance efforts and the belief in the collective power of ordinary people during wartime. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Sabotage"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg"
    },
    {
      "id": 84,
      "title": "Frankenstein; Or, The Modern Prometheus",
      "authors": [
        {
          "name": "Shelley, Mary Wollstonecraft",
          "birth_year": 1797,
          "death_year": 1851
        }
      ],
      "summaries": [
        "\"Frankenstein; Or, The Modern Prometheus\" by Mary Wollstonecraft Shelley is a novel written in the early 19th century. The story explores themes of ambition, the quest for knowledge, and the consequences of man's hubris through the experiences of Victor Frankenstein and the monstrous creation of his own making.   The opening of the book introduces Robert Walton, an ambitious explorer on a quest to discover new lands and knowledge in the icy regions of the Arctic. In his letters to his sister Margaret, he expresses both enthusiasm and the fear of isolation in his grand venture. As Walton's expedition progresses, he encounters a mysterious, emaciated stranger who has faced great suffering—furthering the intrigue of his narrative. This stranger ultimately reveals his tale of creation, loss, and the profound consequences of seeking knowledge that lies beyond human bounds. The narrative is set up in a manner that suggests a deep examination of the emotions and ethical dilemmas faced by those who dare to defy the natural order. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Frankenstein's monster (Fictitious character) -- Fiction",
        "Frankenstein, Victor (Fictitious character) -- Fiction",
        "Gothic fiction",
        "Horror tales",
        "Monsters -- Fiction",
        "Science fiction",
        "Scientists -- Fiction"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
      
    },
    {
      "id": 2701,
      "title": "Moby Dick; Or, The Whale",
      "authors": [
        {
          "name": "Melville, Herman",
          "birth_year": 1819,
          "death_year": 1891
        }
      ],
      "summaries": [
        "\"Moby Dick; Or, The Whale\" by Herman Melville is a novel written in the mid-19th century. The story follows Ishmael, a sailor on a whaling voyage, who seeks adventure and escape from his gloomy life on land. As he embarks on this journey, he becomes drawn into the complex world of whaling and is introduced to the ominous figure of Captain Ahab, whose obsession with a legendary white whale ultimately drives the narrative.  At the start of the novel, Ishmael introduces himself and shares his philosophy about the sea as a remedy for his melancholic disposition. He muses on the magnetic pull of the ocean, describing not only his own urge to set sail but also the collective longing of city dwellers for the water. Ishmael's journey takes him to New Bedford, where he experiences a series of humorous and strange encounters while seeking lodging before joining a whaling ship. As he navigates his way through the town, he is introduced to Queequeg, a tattooed harpooner with a mysterious past, setting the stage for a unique friendship that unfolds amidst the backdrop of whaling adventures. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Adventure stories",
        "Ahab, Captain (Fictitious character) -- Fiction",
        "Mentally ill -- Fiction",
        "Psychological fiction",
        "Sea stories",
        "Ship captains -- Fiction",
        "Whales -- Fiction",
        "Whaling -- Fiction",
        "Whaling ships -- Fiction"
      ],
      "image/jpeg": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg"
    },
  ]

  getAllBooks() {
    return this.booksArray;
  }

  getBookById(id: number): Book | undefined {
    return this.booksArray.find((book) => book.id === id);
  }

  submitApplication() {    
    console.log(`submitted`,);  
  }
}
