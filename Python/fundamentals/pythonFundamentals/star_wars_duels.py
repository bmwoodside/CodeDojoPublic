# rex = {
#     "name": "Rex",
#     "attack": 15,
#     "weapon": "Blaster",
#     "health": 100
# }

# cody = {
#     "name": "Cody",
#     "attack": 15,
#     "weapon": "Blaster",
#     "health": 100
# }

import random

class Trooper:
    game_name = "Star Wars Dojo Duel"
    everyone = []

    def __init__(self, name, attack):
        self.name = name
        self.weapon = "Blaster"
        self.attack = attack
        self.health = 100
        Trooper.everyone.append(self)

    def fight(self, foe):
        rand_attack = random.randint(0, self.attack)
        foe.health -= rand_attack
        if foe.health > 0:
            print(f"{self.name} damages {foe.name} with a {self.weapon} by {rand_attack}.")
            print(f"{foe.name} Health: {foe.health}")
        else:
            print(f"{self.name} obliterated {foe.name} with an attack of {rand_attack}!")
        
        return self
    
    def heal(self):
        rand_health = random.randint(1, 10)
        future_health = self.health + rand_health
        if Trooper.can_heal(future_health):
            self.health += rand_health
            print(f"{self.name} healed for {rand_health} health! Current Health: {self.health}")
        else:
            self.health = 100
            print(f"{self.name} health can't go above 100 | Current Health: {self.health}.")

    @classmethod
    def all_fighters(cls):
        print("Fighters:")
        for fighter in cls.everyone:
            print(fighter.name, fighter.weapon)
    
    @staticmethod
    def can_heal(future_health):
        if future_health > 100:
            return False
        else:
            return True

class Jedi(Trooper):
    def __init__(self, name, attack):
        super().__init__(name, attack)
        self.health = 200
        self.weapon = "Lightsaber"
        self.force_push_attack = 50
        self.trooper = Trooper("Finn", 25)

    def force_push(self, foe):
        foe.health -= self.force_push_attack
        if foe.health > 0:
            print(f"{self.name} damages {foe.name} with a Force Push by {self.force_push_attack}.")
            print(f"{foe.name} Health: {foe.health}")
        else:
            print(f"{self.name} obliterated {foe.name} with an attack of Force Push!")
        
        return self
    
    def heal(self):
        rand_health = random.randint(1, 20)
        future_health = self.health + rand_health
        if Jedi.can_heal(future_health):
            self.health += rand_health
            print(f"{self.name} healed for {rand_health} health! Current Health: {self.health}")
        else:
            self.health = 200
            print(f"{self.name} health can't go above 200 | Current Health: {self.health}.")
        return self

    @staticmethod
    def can_heal(future_health):
        if future_health > 200:
            return False
        else:
            return True

class Sith(Jedi):
    def __init__(self, name, attack):
        super().__init__(name, attack)
        self.force_lightning_attack = 70

    def force_lightning(self, foe):
        foe.health -= self.force_lightning_attack
        if foe.health > 0:
            print(f"{self.name} damages {foe.name} for {self.force_lightning_attack}")
            print(f"{foe.name} Health: {foe.health}")
        else:
            print(f"{self.name} obliterated {foe.name} with Force Lightning!")
        return self




vader = Sith("Darth Vader", 75)
obi = Jedi("Obi Wan", 75)
rex = Trooper("Rex", 15)
cody = Trooper("Cody", 12)

vader.force_lightning(obi).fight(obi).heal().fight(obi)

# print(f"Welcome to {Trooper.game_name}")
# print(f"{rex.name} vs {cody.name}")
# print(f"{rex.name}: Attack - {rex.attack} | Health: {rex.health}")
# print(f"{cody.name}: Attack - {cody.attack} | Health: {cody.health}")

# rex.fight(cody)
# rex.fight(cody)

# cody.heal()

# Trooper.all_fighters()