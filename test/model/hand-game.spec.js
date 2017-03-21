import HandGameData from '../../src/model/hand-game.json';

describe('Hand Game Data', () => {

  const handGame = HandGameData.handGame;

  it('should exist', () => {
    expect(handGame).to.exist;
  });

  it('should have two properties "default" and "additional"', () => {
    expect(handGame).to.have.property('default');
    expect(handGame).to.have.property('variation');
  });

  describe('# Default', () => {

    const data = handGame.default;

    it('should have three outcomes "rock, paper and scissors"', () => {
      expect(data).to.have.all.keys(['rock', 'paper', 'scissors']);
    });

    describe('## Rock', () => {
      const rock = data.rock;

      it('should beat one outcome', () => {
        expect(rock.length).to.equal(1);
      });

      it('should beat scissors and be stated as "cruches"', () => {
        expect(rock[0]).to.have.all.keys(['beats', 'how']);
        expect(rock[0].beats).to.equal('scissors');
        expect(rock[0].how).to.equal('crushes');
      });
    });

    describe('## Paper', () => {
      const paper = data.paper;

      it('should beat one outcome', () => {
        expect(paper.length).to.equal(1);
      });

      it('should beat rock and be stated as "covers"', () => {
        expect(paper[0]).to.have.all.keys(['beats', 'how']);
        expect(paper[0].beats).to.equal('rock');
        expect(paper[0].how).to.equal('covers');
      });
    });

    describe('## Scissors', () => {
      const scissors = data.scissors;

      it('should beat one outcome', () => {
        expect(scissors.length).to.equal(1);
      });

      it('should beat paper and be stated as "cuts"', () => {
        expect(scissors[0]).to.have.all.keys(['beats', 'how']);
        expect(scissors[0].beats).to.equal('paper');
        expect(scissors[0].how).to.equal('cuts');
      });
    });
  });


  describe('# Variation Option', () => {

    const data = handGame.variation;

    it('should have five outcomes "rock, paper, scissors, lizard and spock"', () => {
      expect(data).to.have.all.keys(['rock', 'paper', 'scissors', 'lizard', 'spock']);
    });

    describe('## Rock', () => {
      const rock = data.rock;

      it('should beat two outcomes', () => {
        expect(rock.length).to.equal(2);
      });

      it('should beat scissors and be stated as "crushes"', () => {
        expect(rock[0]).to.have.all.keys(['beats', 'how']);
        expect(rock[0].beats).to.equal('scissors');
        expect(rock[0].how).to.equal('crushes');
      });

      it('should beat lizard and be stated as "crushes"', () => {
        expect(rock[1]).to.have.all.keys(['beats', 'how']);
        expect(rock[1].beats).to.equal('lizard');
        expect(rock[1].how).to.equal('crushes');
      });
    });

    describe('## Paper', () => {
      const paper = data.paper;

      it('should beat two outcomes', () => {
        expect(paper.length).to.equal(2);
      });

      it('should beat rock and be stated as "covers"', () => {
        expect(paper[0]).to.have.all.keys(['beats', 'how']);
        expect(paper[0].beats).to.equal('rock');
        expect(paper[0].how).to.equal('covers');
      });

      it('should beat spock and be stated as "disproves"', () => {
        expect(paper[0]).to.have.all.keys(['beats', 'how']);
        expect(paper[0].beats).to.equal('rock');
        expect(paper[0].how).to.equal('covers');
      });
    });

    describe('## Scissors', () => {
      const scissors = data.scissors;

      it('should beat two outcomes', () => {
        expect(scissors.length).to.equal(2);
      });

      it('should beat paper and be stated as "cuts"', () => {
        expect(scissors[0]).to.have.all.keys(['beats', 'how']);
        expect(scissors[0].beats).to.equal('paper');
        expect(scissors[0].how).to.equal('cuts');
      });

      it('should beat lizard and be stated as "decapitates"', () => {
        expect(scissors[1]).to.have.all.keys(['beats', 'how']);
        expect(scissors[1].beats).to.equal('lizard');
        expect(scissors[1].how).to.equal('decapitates');
      });
    });

    describe('## Lizard', () => {
      const lizard = data.lizard;

      it('should beat two outcomes', () => {
        expect(lizard.length).to.equal(2);
      });

      it('should beat spock and be stated as "poisons"', () => {
        expect(lizard[0]).to.have.all.keys(['beats', 'how']);
        expect(lizard[0].beats).to.equal('spock');
        expect(lizard[0].how).to.equal('poisons');
      });

      it('should beat paper and be stated as "eats"', () => {
        expect(lizard[1]).to.have.all.keys(['beats', 'how']);
        expect(lizard[1].beats).to.equal('paper');
        expect(lizard[1].how).to.equal('eats');
      });
    });

    describe('## Spock', () => {
      const spock = data.spock;

      it('should beat two outcomes', () => {
        expect(spock.length).to.equal(2);
      });

      it('should beat scissors and be stated as "smashes"', () => {
        expect(spock[0]).to.have.all.keys(['beats', 'how']);
        expect(spock[0].beats).to.equal('scissors');
        expect(spock[0].how).to.equal('smashes');
      });

      it('should beat rock and be stated as "vaporizes"', () => {
        expect(spock[1]).to.have.all.keys(['beats', 'how']);
        expect(spock[1].beats).to.equal('rock');
        expect(spock[1].how).to.equal('vaporizes');
      });
    });
  });

});
