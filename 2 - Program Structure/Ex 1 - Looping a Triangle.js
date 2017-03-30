/*

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

for (var triangle = "#"; triangle.length < 8; triangle += "#") { // --- creates the variable triangle and adds "#" to it 7 times
  console.log(triangle);
}
//#
