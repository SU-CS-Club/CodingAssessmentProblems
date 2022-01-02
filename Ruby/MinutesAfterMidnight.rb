=begin
Time after midnight test
Not associated with a LeetCode test
Takes in a String for time in the format 1:36 PM and outputs how many minutes that time is after midnight
Dr. Schrum was talking about this problem in class so I tried it.
I believe this works but it could be wrong
=end

# Author = Nolan Winsman


# @param [String] time
# @return [Integer]
def minutes_after_midnight (time)
    time = "0" + time if time.length == 7
    return 0 if time == "12:00 AM"
    return 12 * 60 if time == "12:00 PM"
    hours = time[0,2].to_i
    minutes = time[3,4].to_i
    total_minutes = (hours * 60) + minutes
    total_minutes += (12 * 60) if time[6] == 'P'
    return total_minutes
end

puts "Enter a time in the format 11:23 AM"
input = gets.chomp
puts minutes_after_midnight input

