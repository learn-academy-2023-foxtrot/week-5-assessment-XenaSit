# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:

# INPUT: array with strings of words
# OUTPUT: and array of words in the string that correspond with a passed in letter
# FUNCTION: Not quite sure about that, becuase i didn't create a function. 
# PROCESS:
# 1) pass in the given array with value
# 2) create a conditional statement if value includes a given letter return value

beverages_array.map do |value|
  if value.include?filter_letter_o
    puts value
  end
end
p "==========="
beverages_array.map do |value|
    if value.include?filter_letter_t
      p value.to_s
    end
  end


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { 
    northwest: ['Washington', 'Oregon', 'Idaho'], 
    southwest: ['California', 'Arizona', 'Nevada'], 
    notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:

# INPUT: an object with 3 key:values 
# OUTPUT: an array of sorted words
# FUNCTION: again Not quite sure about that, becuase i didn't create a function. 
# PROCESS: 
# 1) .map the object provided to iterate through all the pairs of key:values
# 2) pass in 2 parameter key and value and return back only values
# 3) put out values flattened (arrays combined in one) and sorted


us_states.map { |key, value| 
  value
}
p us_states.values.flatten.sort 

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:

# INPUT: a class
# OUTPUT: a string text with passed in hashs
# FUNCTION: attr_accessor & initializer
# PROCESS:
# 1) create a class that takes in 3 variables
# 2) create a method that print out text with precise variables for created new Bike

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def lets_say 
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster (value)
        [@current_speed += value, 0].max
    end
    
    def brake(value)
        [@current_speed -= value, 0].max
    end
end

trek = Bike.new('Trek')

p trek.lets_say


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:

# INPUT: a class
# OUTPUT: a string text with passed in hashs
# FUNCTION: attr_accessor & initializer
# PROCESS:
# 1) to already created class add 2 more methods that will add or subtract the speed from the class Bike
# 2) to add speed we will add + value provided to every current_speed output.
# 3) we will say that maximum speed doesnt go lower 0
# 4) same for brake method, only we will subtract value provided from the speed variable

# def pedal_faster (value)
#     [@current_speed += value, 0].max
# end

# def brake(value)
#     [@current_speed -= value, 0].max
# end

p trek.pedal_faster(10)
p trek.pedal_faster(18)
p trek.brake(5)
p trek.brake(25)
p trek.brake(2)
p trek.pedal_faster(10)
p trek.pedal_faster(18)
p trek.brake(5)
p trek.brake(3)
p trek.brake(1)