# s3-with-sns
In this example I am creating two lambdas. when an file is added to a specific s3 bucket, an s3 "Objectcreated" event will be triggered which will in turn send a msg through sns. When a file is deleted, this in turn will trigger s3's "objectremoved" event.
