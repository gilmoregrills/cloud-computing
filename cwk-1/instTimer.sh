response=0
max=0
total=0

for i in {1, 2, 3, 4, 5} ; do
	start=`date +%s`
	echo 'yes' | rhc app create anodeapp nodejs-0.6
	end=`date +%s`
	echo 'yes' | rhc app delete anodeapp
	response=$((end-start))
	total=$((total+response))
	if ((response>max)) ; then
		max=$response
	fi
done

echo 'total:'$total
average=$((total/5))
echo 'average: '$average
echo 'maximum: '$max
