Maintenant hébérgé sur framagit
# ROOT_DIR=$(realpath .)

# publish:
# 	make publish-index &&\
# 	make publish-2017-2018 &&\
# 	make publish-2018-2019 &&\
# 	make publish-2019-2020

# publish-index:
# 	rsync -e "ssh -p 38113" -ai --delete-after --omit-dir-times --no-perms\
# 		${ROOT_DIR}/index/ \
# 		ben@192.168.1.19:/usr/share/nginx/html/archives/

# publish-2017-2018:
# 	rsync -e "ssh -p 38113" -ai --delete-after --omit-dir-times --no-perms\
# 		${ROOT_DIR}/2017-2018/public/ \
# 		ben@192.168.1.19:/usr/share/nginx/html/archives/2017-2018/


# publish-2018-2019:
# 	rsync -e "ssh -p 38113" -ai --delete-after --omit-dir-times --no-perms\
# 		${ROOT_DIR}/2018-2019/public/ \
# 		ben@192.168.1.19:/usr/share/nginx/html/archives/2018-2019/

# publish-2019-2020:
# 	rsync -e "ssh -p 38113" -ai --delete-after --omit-dir-times --no-perms\
# 		${ROOT_DIR}/2019-2020/public/ \
# 		ben@192.168.1.19:/usr/share/nginx/html/archives/2019-2020/
